import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { region, bucket, accessKeyId, secretAccessKey } from './helper'

/**
 * Generates a presigned URL for uploading an image file to AWS S3.
 *
 * @param {string} contentType - The MIME type of the file to be uploaded (e.g., "image/jpeg").
 * @param {string} fileName - The name of the file to be used when storing the image in AWS S3.
 * @param {number} [expiration=1000] - The expiration time of the presigned URL in seconds. Defaults to 1000 seconds.
 * @returns {Promise<string>} - A promise that resolves to a presigned URL that can be used to upload the image to AWS S3.
 */
export const getPresignedImageURL = (contentType: string, fileName: string, expiration = 1000) => {
  const client = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  })
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: fileName,
    ContentType: contentType,
  })
  return getSignedUrl(client, command, { expiresIn: expiration })
}

/**
 * Uploads an image file to AWS S3 using a presigned URL.
 *
 * @param {File} file - The image file to be uploaded to AWS S3.
 * @param {string} preSignedUrl - The presigned URL provided by AWS S3 for uploading the image.
 * @param {string} fileName - The name of the file to be used when storing the image in AWS S3.
 * @returns {Promise<string>} - A promise that resolves to the URL of the uploaded image in AWS S3.
 * @throws {Error} - Throws an error if the image upload fails.
 */
export const uploadPresignedImage = async (file: File, preSignedUrl: string, fileName: string): Promise<string> => {
  const { type } = file

  try {
    const response = await fetch(preSignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': type,
      },
      body: file,
    })

    if (!response.ok) {
      throw new Error('Failed to upload signed image')
    }

    const AWSImageURL = `https://${bucket}.s3.${region}.amazonaws.com/${fileName}`

    return AWSImageURL
  } catch (uploadError) {
    console.error(uploadError)
    throw uploadError
  }
}

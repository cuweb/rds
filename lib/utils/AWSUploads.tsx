import { PutObjectCommand, S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const region = import.meta.env.VITE_AWS_REGION
const bucket = import.meta.env.VITE_S3_BUCKET
const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY_ID
const secretAccessKey = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY

const createPresignedUrlWithClient = (contentType: string, fileName: string) => {
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
  return getSignedUrl(client, command, { expiresIn: 20 })
}

export const uploadImageToAWS = async (file: File): Promise<{ preSignedUrl: string; fileName: string }> => {
  const { name, type } = file

  const fileNameWithoutExtension = name.split('.').slice(0, -1).join('.')

  const fileName = `${fileNameWithoutExtension}_${Date.now()}`

  try {
    const preSignedUrl = await createPresignedUrlWithClient(type, fileName)

    return { preSignedUrl: preSignedUrl, fileName: fileName }
  } catch (urlError) {
    console.error(urlError)
    throw new Error('Failed to generate signed URL')
  }
}

export const uploadPresignedImageToAWS = async (
  file: File,
  preSignedUrl: string,
  fileName: string,
): Promise<string> => {
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

const deleteObjectFromS3 = async (fileName: string) => {
  const client = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  })
  const command = new DeleteObjectCommand({ Bucket: bucket, Key: fileName })
  return client.send(command)
}

export async function DeleteFromS3(name: string) {
  try {
    const a = await deleteObjectFromS3(name)
    console.log(a, 'sd')
    return true
  } catch (error) {
    console.error(error)
    throw new Error('Failed to delete file')
  }
}

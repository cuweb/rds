import { uploadPresignedImage, getPresignedImageURL } from './presigned'

/**
 * Uploads an image to AWS S3 or generates a presigned URL for the image.
 *
 * @param {File} file - The image file to be uploaded or for which a presigned URL is to be generated.
 * @param {boolean} [uploadToAWS=true] - A boolean flag indicating whether the image should be uploaded to AWS S3.
 *                                        If true, the image will be uploaded and the function will return the uploaded image's URL.
 *                                        If false, the function will return the presigned URL for the image without uploading.
 * @returns {Promise<string>} - A promise that resolves to the uploaded image's URL if `uploadToAWS` is true, or the presigned URL if `uploadToAWS` is false.
 * @throws {Error} - Throws an error if the presigned URL generation or the image upload fails.
 */
export const uploadImage = async (file: File, uploadToAWS: boolean = true): Promise<string> => {
  const { name, type } = file

  const fileNameWithoutExtension = name.split('.').slice(0, -1).join('.')

  const fileName = `${fileNameWithoutExtension}_${Date.now()}`

  try {
    const preSignedUrl = await getPresignedImageURL(type, fileName)
    if (uploadToAWS) {
      return uploadPresignedImage(file, preSignedUrl, fileName)
    } else {
      return preSignedUrl
    }
  } catch (urlError) {
    console.error(urlError)
    throw new Error('Failed to generate signed URL')
  }
}

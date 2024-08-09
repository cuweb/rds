'use server'
import { PutObjectCommand, S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const region = process.env.AWS_REGION
const bucket = process.env.S3_BUCKET

const createPresignedUrlWithClient = (contentType: string, fileName: string) => {
  console.log('region', region, ' bucket', bucket, ' key', fileName)
  const client = new S3Client({ region })
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: fileName,
    ContentType: contentType,
  })
  return getSignedUrl(client, command, { expiresIn: 60 })
}

const deleteObjectFromS3 = async (fileName: string) => {
  const client = new S3Client({ region })
  const command = new DeleteObjectCommand({ Bucket: bucket, Key: fileName })
  return client.send(command)
}

export async function AddToS3(file: File) {
  const { name, type } = file

  console.log(name, type)

  const fileName = 'uploadedImage' + Date.now()

  try {
    const signedUrl = await createPresignedUrlWithClient(type, fileName)

    console.log('🚀 ~ POST ~ signedUrl:', signedUrl)
    return JSON.stringify({ url: signedUrl })
  } catch (err) {
    console.error(err)
    return JSON.stringify({ error: 'Failed to generate signed URL' })
  }
}

export async function DeleteFromS3(file: File) {
  const { name } = file
  console.log('🚀 ~ DELETE ~ name:', name)

  try {
    await deleteObjectFromS3(name)
    return JSON.stringify({ message: 'File deleted successfully' })
  } catch (err) {
    console.error(err)
    return JSON.stringify({ error: 'Failed to delete file' })
  }
}

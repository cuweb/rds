'use server'
import { PutObjectCommand, S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const region = import.meta.env.VITE_AWS_REGION
const bucket = import.meta.env.VITE_S3_BUCKET
const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY_ID
const secretAccessKey = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY

const createPresignedUrlWithClient = (contentType: string, fileName: string) => {
  console.log('region', region, ' bucket', bucket, ' key', fileName, ' ContentType', contentType)
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

    // Upload the file using the signed URL
    const response = await fetch(signedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': type,
      },
      body: file,
    })

    if (!response.ok) {
      throw new Error('Failed to upload file')
    }

    console.log('File uploaded successfully')
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

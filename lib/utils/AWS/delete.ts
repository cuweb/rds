import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { region, accessKeyId, secretAccessKey, bucket } from './helper'

const deleteObject = async (fileName: string) => {
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

export async function deleteImage(name: string): Promise<boolean> {
  try {
    await deleteObject(name)
    return true
  } catch (error) {
    console.error(error)
    throw new Error('Failed to delete file')
  }
}

/**
 * Generates a presigned URL for uploading an image file to AWS S3.
 *
 * @param {string} contentType - The MIME type of the file to be uploaded (e.g., "image/jpeg").
 * @param {string} fileName - The name of the file to be used when storing the image in AWS S3.
 * @param {number} [expiration=1000] - The expiration time of the presigned URL in seconds. Defaults to 1000 seconds.
 * @returns {Promise<string>} - A promise that resolves to a presigned URL that can be used to upload the image to AWS S3.
 */
export declare const getPresignedImageURL: (contentType: string, fileName: string, expiration?: number) => Promise<string>;
/**
 * Uploads an image file to AWS S3 using a presigned URL.
 *
 * @param {File} file - The image file to be uploaded to AWS S3.
 * @param {string} preSignedUrl - The presigned URL provided by AWS S3 for uploading the image.
 * @param {string} fileName - The name of the file to be used when storing the image in AWS S3.
 * @returns {Promise<string>} - A promise that resolves to the URL of the uploaded image in AWS S3.
 * @throws {Error} - Throws an error if the image upload fails.
 */
export declare const uploadPresignedImage: (file: File, preSignedUrl: string, fileName: string) => Promise<string>;

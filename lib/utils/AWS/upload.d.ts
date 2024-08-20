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
export declare const uploadImage: (file: File, uploadToAWS?: boolean) => Promise<string>;

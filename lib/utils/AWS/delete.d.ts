/**
 * Deletes an image file from AWS S3.
 *
 * @param {string} fileName - The name (key) of the file to be deleted from AWS S3.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the deletion is successful.
 * @throws {Error} - Throws an error if the deletion fails.
 */
export declare const deleteImage: (fileName: string) => Promise<boolean>;

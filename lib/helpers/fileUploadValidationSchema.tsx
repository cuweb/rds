import * as Yup from 'yup'
const fileUploadValidationSchema = Yup.object().shape({
  file: Yup.mixed()
    .required('Please select a file')
    .test('is-allowed-format', 'Invalid file format', (value) => {
      if (!value) return true

      const file = value as File
      const fileType = file.type
      const allowedFileTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'text/plain',
      ]

      return allowedFileTypes.includes(fileType)
    })
    .test('is-file-size-valid', 'File size must be less than 10MB', (value) => {
      if (!value) return true

      const file = value as File

      return file.size <= 10 * 1024 * 1024
    }),
})

export default fileUploadValidationSchema

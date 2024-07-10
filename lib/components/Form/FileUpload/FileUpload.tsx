import { useState } from 'react'
import { fieldStyles } from '../../../styles/form'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'
import { useField } from 'formik'

export interface FileUploadProps extends FieldComponentProps {
  onChange?: (File: FileList | File[] | null) => void
}

export const FileUpload = ({ ...props }: FileUploadProps) => {
  const { name, onChange, ...rest } = props
  const errorClass = useErrorClass(name)

  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])

  const [, , helpers] = useField(name)

  const { setValue, setTouched, setError } = helpers

  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files
    if (newFiles) {
      const newPreviews = Array.from(newFiles)
        .map((file) => {
          if (file.type.startsWith('image/')) {
            return URL.createObjectURL(file)
          }
          return null
        })
        .filter(Boolean) as string[]

      setFiles(Array.from(newFiles))
      setPreviews(newPreviews)
    }

    setValue(newFiles)
    setTouched(true)
    setError(undefined)

    if (onChange) {
      onChange(newFiles)
    }
  }

  const handleDelete = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index)
    const updatedPreviews = previews.filter((_, i) => i !== index)

    setFiles(updatedFiles)
    setPreviews(updatedPreviews)

    if (onChange) {
      onChange(updatedFiles)
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <input
        type="file"
        id="file"
        name={name}
        className={fieldStyles.uploads + ' ' + fieldStyles.disabled + errorClass}
        onChange={handleMediaChange}
        {...rest}
      />
      <div className="flex flex-row flex-wrap gap-5">
        {previews.map((src, index) => (
          <div className="relative w-32 h-32" key={index}>
            <img key={index} src={src} alt={`preview-${index}`} className="w-full h-auto bg-contain" />

            <button
              type="button"
              onClick={() => handleDelete(index)}
              className="absolute inset-0 w-6 h-6 cursor-pointer bg-gray-800 text-white"
            >
              <span className="sr-only">Click to delete the image</span>
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

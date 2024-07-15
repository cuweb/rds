import { useState } from 'react'
import { fieldStyles } from '../../../styles/form'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'
import { useField } from 'formik'

export interface FileUploadProps extends FieldComponentProps {
  onChange?: (File: FileList | File[] | null) => void
  nopreview?: boolean
}

export const FileUpload = ({ ...props }: FileUploadProps) => {
  const { name, onChange, nopreview = false, ...rest } = props
  const errorClass = useErrorClass(name)

  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])

  const [, , helpers] = useField(name)

  const { setValue } = helpers

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
      {!nopreview && previews && previews.length > 0 && (
        <div className="flex flex-row flex-wrap gap-5 border-[1px] border-cu-black-100 rounded-xl p-6">
          {previews.map((src, index) => (
            <div className="relative w-32 h-auto" key={index}>
              <img
                key={index}
                src={src}
                alt={`preview-${index}`}
                className="w-full h-auto bg-contain !rounded-none !m-0"
              />

              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="absolute inset-0 w-6 h-6 leading-none cursor-pointer bg-gray-800 text-white"
              >
                <span className="sr-only">Click to delete the image</span>
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

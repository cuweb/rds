import React, { useState } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $createImageNode } from '../nodes/ImageNode'
import { $getSelection } from 'lexical'

const ImageUploadPlugin = () => {
  const [editor] = useLexicalComposerContext()
  const [fileInput, setFileInput] = useState<HTMLInputElement | null>(null)

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()

      reader.onload = () => {
        editor.update(() => {
          const imageNode = $createImageNode(reader.result as string)
          const selection = $getSelection()
          if (selection) {
            selection.insertNodes([imageNode])
          }
        })
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={(input) => setFileInput(input)}
        onChange={handleUpload}
      />
      <button type="button" onClick={() => fileInput && fileInput.click()}>
        Upload Image
      </button>
    </>
  )
}

export default ImageUploadPlugin

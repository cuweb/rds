import { useState } from 'react'
import { LexicalEditor } from 'lexical'
import { FieldControl } from '../../FieldControl/FieldControl'
import { Button } from '../../../Button/Button'
import type { Position } from '../nodes/InlineImageNode'
import { INSERT_INLINE_IMAGE_COMMAND } from '../plugins/InlineImagePlugin'

export const ImageModal = ({ activeEditor }: { activeEditor: LexicalEditor }): JSX.Element => {
  const [src, setSrc] = useState('')
  const [altText, setAltText] = useState('')
  const [position, setPosition] = useState<Position>('left')
  const [showCaption, setShowCaption] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const reader = new FileReader()
      reader.onload = function () {
        if (typeof reader.result === 'string') {
          setSrc(reader.result)
        }
      }
      if (files !== null) {
        reader.readAsDataURL(files[0])
      }
    }
  }

  const handleAltChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAltText(e.target.value)
  }

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value as Position)
  }

  const handleShowCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowCaption(e.target.checked)
  }

  const handleInsertOnClick = () => {
    //TODO: close modal here
    const payload = { altText, src, showCaption, position }
    activeEditor.dispatchCommand(INSERT_INLINE_IMAGE_COMMAND, payload)
  }

  const selectValues = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'center', label: 'Center' },
  ]

  return (
    <div className="flex gap-5 flex-col flex-wrap">
      <FieldControl control="fileUpload" label="Image Upload" name="inline-image" onChange={handleImageChange} />

      <FieldControl
        control="textarea"
        label="Alt Text"
        placeholder="Descriptive alternative text"
        name="image-alt"
        onChange={handleAltChange}
      />

      <FieldControl
        control="select"
        label="Position"
        options={selectValues}
        name="image-position"
        onChange={handlePositionChange}
      />

      <FieldControl
        control="checkbox"
        name="checkbox"
        label="Show Caption"
        options={[
          {
            label: 'Yes',
            value: 'yes',
          },
        ]}
        isInline
        onChange={handleShowCaptionChange}
        checked={showCaption}
      />

      <Button title="Insert" isSmall onClick={handleInsertOnClick}></Button>
    </div>
  )
}

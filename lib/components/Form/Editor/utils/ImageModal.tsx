import { useEffect, useRef, useState } from 'react'
import { LexicalEditor, NodeKey } from 'lexical'
import { FieldControl } from '../../FieldControl/FieldControl'
import { Button } from '../../../Button/Button'
import type { Position } from '../nodes/InlineImageNode'
import { INSERT_INLINE_IMAGE_COMMAND } from '../plugins/InlineImagePlugin'
import { ButtonGroup } from '../../../ButtonGroup/ButtonGroup'
import { Modal } from '../../../Modal/Modal'
import Error from '../../Error/Error'
import FieldGroup from '../../FieldGroup/FieldGroup'
import { $getNodeByKey } from 'lexical'
import { InlineImageNode } from '../nodes/InlineImageNode'

export const ImageModal = ({
  activeEditor,
  triggerModalOpen,
  setTriggerModalOpen,
  nodeKey,
}: {
  activeEditor: LexicalEditor
  triggerModalOpen: boolean
  setTriggerModalOpen: (isOpen: boolean) => void
  nodeKey?: NodeKey
}): JSX.Element => {
  const editorState = activeEditor.getEditorState()
  const node = nodeKey ? editorState.read(() => $getNodeByKey(nodeKey) as InlineImageNode) : null

  const [src, setSrc] = useState('')
  const [srcError, setSrcError] = useState(false)
  const [altText, setAltText] = useState(node ? node.getAltText() : '')
  const [altTextError, setAltTextError] = useState(false)
  const [position, setPosition] = useState<Position>(node ? node.getPosition() : 'left')
  const [showCaption, setShowCaption] = useState(node ? node.getShowCaption() : false)
  const [ModalOpen, setModalOpen] = useState(triggerModalOpen)

  useEffect(() => {
    setModalOpen(triggerModalOpen)

    if (triggerModalOpen && !node) {
      setSrc('')
      setSrcError(false)
      setAltText('')
      setAltTextError(false)
      setPosition('left')
      setShowCaption(false)
    }
  }, [triggerModalOpen, node])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const reader = new FileReader()
      reader.onload = function () {
        if (typeof reader.result === 'string') {
          setSrc(reader.result)
          setSrcError(false)
        }
        return ''
      }
      if (files !== null) {
        reader.readAsDataURL(files[0])
      }
    }
  }

  const handleAltChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAltText(e.target.value)
    setAltTextError(false)
  }

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value as Position)
  }

  const handleShowCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowCaption(e.target.checked)
  }

  const handleInsertOnClick = () => {
    if (!setSrc) {
      setSrcError(true)
    } else if (!setAltText) {
      setAltTextError(true)
    } else {
      setSrcError(false)
      setAltTextError(false)

      const payload = { altText, src, showCaption, position }
      activeEditor.dispatchCommand(INSERT_INLINE_IMAGE_COMMAND, payload)
      setModalOpen(false)
      setTriggerModalOpen(false)
      setSrc('')
      setSrcError(false)
    }
  }

  const handleOnConfirm = () => {
    const payload = { altText, showCaption, position }
    if (!setAltText) {
      setAltTextError(true)
    } else if (node) {
      activeEditor.update(() => {
        node.update(payload)
        setModalOpen(false)
        setTriggerModalOpen(false)
      })
    }
  }

  const handleCancelOnClick = () => {
    setSrc('')
    setAltText('')
    setPosition('left')
    setShowCaption(false)
    setModalOpen(false)
    setSrcError(false)
    setAltTextError(false)
    setTriggerModalOpen(false)
  }

  const selectValues = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'center', label: 'Center' },
  ]

  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <Modal
      isOpen={ModalOpen}
      setIsOpen={setModalOpen}
      ariaLabel="Insert Inline Image"
      ariaDescription="A modal to add the image"
    >
      <FieldGroup>
        {!nodeKey && (
          <FieldControl
            control="fileUpload"
            label="Image Upload"
            required
            name="inline-image"
            onChange={handleImageChange}
            ref={fileInputRef}
          />
        )}
        {!nodeKey && srcError && <Error>Please choose an image</Error>}

        <FieldControl
          control="text"
          required
          label="Alt Text"
          placeholder="Descriptive alternative text"
          name="image-alt"
          onChange={handleAltChange}
        />

        {altTextError && <Error>Please add alternative text</Error>}

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

        <ButtonGroup align="right">
          {node ? (
            <Button title="Confirm" isDisabled={altTextError} onClick={handleOnConfirm}></Button>
          ) : (
            <Button title="Insert" isDisabled={srcError || altTextError} onClick={handleInsertOnClick}></Button>
          )}
          <Button color={'grey'} title="Cancel" onClick={handleCancelOnClick}></Button>
        </ButtonGroup>
      </FieldGroup>
    </Modal>
  )
}

import { useEffect, useRef, useState } from 'react'
import { LexicalEditor, NodeKey } from 'lexical'
import { FieldControl } from '../../FieldControl/FieldControl'
import { Button } from '../../../Button/Button'
import type { Position } from '../nodes/InlineImageNode'
import { INSERT_INLINE_IMAGE_COMMAND } from '../utils/insertInlineImageCommand'
import { ButtonGroup } from '../../../ButtonGroup/ButtonGroup'
import { Modal } from '../../../Modal/Modal'
import Error from '../../Error/Error'
import FieldGroup from '../../FieldGroup/FieldGroup'
import { $getNodeByKey } from 'lexical'
import { InlineImageNode } from '../nodes/InlineImageNode'
import { uploadImage } from '../../../../utils/AWS'
import { useAWSImages } from '../context/useAWSImages'

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
  const [src, setSrc] = useState(node ? node.getSrc() : '')
  const [srcError, setSrcError] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [altText, setAltText] = useState(node ? node.getAltText() : '')
  const [altTextError, setAltTextError] = useState(false)
  const [position, setPosition] = useState<Position>(node ? node.getPosition() : 'left')
  const [showCaption, setShowCaption] = useState(node ? node.getShowCaption() : false)
  const [caption, setCaption] = useState(node ? node.getCaption() : '')
  const [width, setWidth] = useState<number | string>(node ? node.__width : 0)
  const [height, setHeight] = useState<number | string>(node ? node.__height : 0)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const AWSImageContextData = useAWSImages()

  useEffect(() => {
    setTriggerModalOpen(triggerModalOpen)

    if (triggerModalOpen && !node) {
      resetFields()
    }
  }, [triggerModalOpen, setTriggerModalOpen, node])

  const handleImageChange = (files: File[]) => {
    if (files && files.length > 0) {
      const reader = new FileReader()
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const img = new Image()
          img.src = reader.result

          img.onload = () => {
            const imageWidth = img.width
            const imageHeight = img.height

            setWidth(imageWidth)
            setHeight(imageHeight)
          }

          img.onerror = (err) => {
            console.error('Error loading image:', err)
            setSrcError(true)
          }

          setSrc(reader.result)
          setFile(files[0])
          setSrcError(false)
        }
      }

      reader.onerror = (err) => {
        console.error('Error reading file:', err)
        setFile(null)
        setSrcError(true)
        setWidth(0)
        setHeight(0)
      }

      if (files !== null) {
        reader.readAsDataURL(files[0])
      }
    } else {
      setSrcError(true)
    }
  }

  const handleAltChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAltText(e.target.value)
    setAltTextError(!e.target.value)
  }

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value as Position)
  }

  const handleShowCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowCaption(e.target.checked)
  }

  const handleCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value)
  }

  const handleInsertOnClick = async () => {
    if (!src) {
      setSrcError(true)
    } else if (!altText) {
      setAltTextError(true)
    } else if (src && altText) {
      setSrcError(false)
      setAltTextError(false)
      if (file) {
        try {
          const imageURL = await uploadImage(file)

          setSrc(imageURL)

          // Ensure height and width are numbers or undefined
          const parsedHeight = typeof height === 'number' ? height : undefined
          const parsedWidth = typeof width === 'number' ? width : undefined

          const payload = {
            altText,
            height: parsedHeight,
            showCaption,
            src: imageURL,
            width: parsedWidth,
            position,
            caption,
          }

          activeEditor.dispatchCommand(INSERT_INLINE_IMAGE_COMMAND, payload)

          setTriggerModalOpen(false)
          resetFields()
        } catch (err) {
          console.error(err)
        }
      }
    }
  }

  const handleOnConfirm = async () => {
    if (!src) {
      setSrcError(true)
    } else if (!altText) {
      setAltTextError(true)
    } else if (node) {
      setSrcError(false)
      setAltTextError(false)

      let imageSrc = src
      if (file) {
        try {
          imageSrc = await uploadImage(file)
        } catch (error) {
          console.error('Error uploading image:', error)
          return
        }
      }

      setSrc(imageSrc)

      activeEditor.update(() => {
        AWSImageContextData.addImage(imageSrc)
        node.setSrc(imageSrc)
        node.setAltText(altText)
        node.setShowCaption(showCaption)
        node.setPosition(position)
        node.setCaption(caption)
      })

      setTriggerModalOpen(false)
      resetFields()
    }
  }

  const handleCancelOnClick = () => {
    resetFields()
    setTriggerModalOpen(false)
  }

  const resetFields = () => {
    setSrc('')
    setSrcError(false)
    setFile(null)
    setAltText('')
    setAltTextError(false)
    setPosition('left')
    setShowCaption(false)
    setCaption('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const selectValues = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'full', label: 'Full' },
  ]

  return (
    <Modal
      isOpen={triggerModalOpen}
      setIsOpen={setTriggerModalOpen}
      ariaLabel="Insert Inline Image"
      ariaDescription="A modal to add the image"
    >
      <FieldGroup>
        <FieldControl
          control="fileUpload"
          label="Image Upload"
          required
          name="inline-img"
          onChange={handleImageChange}
          refs={fileInputRef}
          setFieldValue={false}
          preview={src ? [src] : null}
          handleOnDelete={() => {
            setSrc('')
            setFile(null)
            setSrcError(true)
          }}
        />

        {srcError && <Error>Please choose an image</Error>}
        <FieldControl
          control="text"
          required
          label="Alt Text"
          placeholder="Descriptive alternative text"
          name="image-alt"
          value={altText}
          onChange={handleAltChange}
        />
        {altTextError && <Error>Please add alternative text</Error>}
        <FieldControl
          control="select"
          label="Position"
          options={selectValues}
          value={position}
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

        {showCaption && (
          <FieldControl
            control="textarea"
            required
            label="Caption"
            placeholder="Descriptive caption text"
            name="image-caption"
            value={caption}
            onChange={handleCaptionChange}
          />
        )}

        <ButtonGroup align="end">
          {node ? (
            <Button title="Confirm" isDisabled={!src || !altText} onClick={handleOnConfirm}></Button>
          ) : (
            <Button title="Insert" isDisabled={!src || !altText} onClick={handleInsertOnClick}></Button>
          )}
          <Button color={'grey'} title="Cancel" onClick={handleCancelOnClick}></Button>
        </ButtonGroup>
      </FieldGroup>
    </Modal>
  )
}

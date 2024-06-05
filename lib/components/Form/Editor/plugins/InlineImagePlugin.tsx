/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $wrapNodeInElement, mergeRegister } from '@lexical/utils'
import {
  $createParagraphNode,
  $createRangeSelection,
  $getSelection,
  $insertNodes,
  $isNodeSelection,
  $isRootOrShadowRoot,
  $setSelection,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  createCommand,
  DRAGOVER_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  LexicalCommand,
  LexicalEditor,
} from 'lexical'
import { useEffect, useRef, useState } from 'react'
import {
  $createInlineImageNode,
  $isInlineImageNode,
  InlineImageNode,
  InlineImagePayload,
} from './../nodes/InlineImageNode'

import { Button } from '../../../Button/Button'

import type { Position } from '../../nodes/InlineImageNode'

export const CAN_USE_DOM: boolean =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'

export type InsertInlineImagePayload = Readonly<InlineImagePayload>

const getDOMSelection = (targetWindow: Window | null): Selection | null =>
  CAN_USE_DOM ? (targetWindow || window).getSelection() : null

export const INSERT_INLINE_IMAGE_COMMAND: LexicalCommand<InlineImagePayload> =
  createCommand('INSERT_INLINE_IMAGE_COMMAND')

export function InsertInlineImageDialog({
  activeEditor,
  onClose,
}: {
  activeEditor: LexicalEditor
  onClose: () => void
}): JSX.Element {
  const hasModifier = useRef(false)

  const [src, setSrc] = useState('')
  const [altText, setAltText] = useState('')
  const [showCaption, setShowCaption] = useState(false)
  const [position, setPosition] = useState<Position>('left')

  const handleShowCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowCaption(e.target.checked)
  }

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value as Position)
  }

  const loadImage = (files: FileList | null) => {
    const reader = new FileReader()

    console.log(files, 'filesfiles')
    reader.onload = function () {
      if (typeof reader.result === 'string') {
        setSrc(reader.result)
      }
      return ''
    }
    if (files !== null) {
      console.log(files[0], 'asd')
      reader.readAsDataURL(files[0])
    }
  }

  const handleOnClick = () => {
    const payload = { altText, src, showCaption, position }
    activeEditor.dispatchCommand(INSERT_INLINE_IMAGE_COMMAND, payload)
  }

  return (
    <div className="flex gap-5 flex-col flex-wrap">
      <div className="flex gap-5 w-full">
        <label className="w-[40%]" htmlFor="image-modal-file-upload">
          Image Upload
        </label>
        <input
          type="file"
          accept="image/*"
          name="inline-image"
          className="grow"
          onChange={(e) => loadImage(e.target.files)}
          id="image-modal-file-upload"
        />
      </div>

      <div className="flex gap-5 w-full">
        <label className="w-[40%]" htmlFor="image-modal-alt">
          Alt Text
        </label>
        <textarea
          className="grow"
          name="inline-image-alt"
          placeholder="Descriptive alternative text"
          onChange={setAltText}
          value={altText}
          id="image-modal-alt"
        />
      </div>

      <div className="flex gap-5 w-full">
        <label className="w-[40%]" htmlFor="position-select">
          Position
        </label>
        <select className="grow" name="position" onChange={handlePositionChange} id="position-select">
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>

      <div className="flex gap-5 w-full">
        <label className="w-[40%]" htmlFor="caption">
          Show Caption
        </label>
        <input id="caption" type="checkbox" checked={showCaption} onChange={handleShowCaptionChange} />
      </div>

      <Button title="Insert Image" isSmall onClick={() => handleOnClick()}></Button>
    </div>
  )
}

export default function InlineImagePlugin({ captionsEnabled }: { captionsEnabled?: boolean }): JSX.Element | null {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand<InsertInlineImagePayload>(
        INSERT_INLINE_IMAGE_COMMAND,
        (payload) => {
          const imageNode = $createInlineImageNode(payload)
          $insertNodes([imageNode])
          if ($isRootOrShadowRoot(imageNode.getParentOrThrow())) {
            $wrapNodeInElement(imageNode, $createParagraphNode).selectEnd()
          }

          return true
        },
        COMMAND_PRIORITY_EDITOR,
      ),
      editor.registerCommand<DragEvent>(
        DRAGSTART_COMMAND,
        (event) => {
          return onDragStart(event)
        },
        COMMAND_PRIORITY_HIGH,
      ),
      editor.registerCommand<DragEvent>(
        DRAGOVER_COMMAND,
        (event) => {
          return onDragover(event)
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand<DragEvent>(
        DROP_COMMAND,
        (event) => {
          return onDrop(event, editor)
        },
        COMMAND_PRIORITY_HIGH,
      ),
    )
  }, [captionsEnabled, editor])

  return null
}

const TRANSPARENT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
const img = document.createElement('img')
img.src = TRANSPARENT_IMAGE

function onDragStart(event: DragEvent): boolean {
  const node = getImageNodeInSelection()
  if (!node) {
    return false
  }
  const dataTransfer = event.dataTransfer
  if (!dataTransfer) {
    return false
  }
  dataTransfer.setData('text/plain', '_')
  dataTransfer.setDragImage(img, 0, 0)
  dataTransfer.setData(
    'application/x-lexical-drag',
    JSON.stringify({
      data: {
        altText: node.__altText,
        caption: node.__caption,
        height: node.__height,
        key: node.getKey(),
        showCaption: node.__showCaption,
        src: node.__src,
        width: node.__width,
      },
      type: 'image',
    }),
  )

  return true
}

function onDragover(event: DragEvent): boolean {
  const node = getImageNodeInSelection()
  if (!node) {
    return false
  }
  if (!canDropImage(event)) {
    event.preventDefault()
  }
  return true
}

function onDrop(event: DragEvent, editor: LexicalEditor): boolean {
  const node = getImageNodeInSelection()
  if (!node) {
    return false
  }
  const data = getDragImageData(event)
  if (!data) {
    return false
  }
  event.preventDefault()
  if (canDropImage(event)) {
    const range = getDragSelection(event)
    node.remove()
    const rangeSelection = $createRangeSelection()
    if (range !== null && range !== undefined) {
      rangeSelection.applyDOMRange(range)
    }
    $setSelection(rangeSelection)
    editor.dispatchCommand(INSERT_INLINE_IMAGE_COMMAND, data)
  }
  return true
}

function getImageNodeInSelection(): InlineImageNode | null {
  const selection = $getSelection()
  if (!$isNodeSelection(selection)) {
    return null
  }
  const nodes = selection.getNodes()
  const node = nodes[0]
  return $isInlineImageNode(node) ? node : null
}

function getDragImageData(event: DragEvent): null | InsertInlineImagePayload {
  const dragData = event.dataTransfer?.getData('application/x-lexical-drag')
  if (!dragData) {
    return null
  }
  const { type, data } = JSON.parse(dragData)
  if (type !== 'image') {
    return null
  }

  return data
}

declare global {
  interface DragEvent {
    rangeOffset?: number
    rangeParent?: Node
  }
}

function canDropImage(event: DragEvent): boolean {
  const target = event.target
  return !!(
    target &&
    target instanceof HTMLElement &&
    !target.closest('code, span.editor-image') &&
    target.parentElement &&
    target.parentElement.closest('div.ContentEditable__root')
  )
}

function getDragSelection(event: DragEvent): Range | null | undefined {
  let range
  const target = event.target as null | Element | Document
  const targetWindow =
    target == null
      ? null
      : target.nodeType === 9
        ? (target as Document).defaultView
        : (target as Element).ownerDocument.defaultView
  const domSelection = getDOMSelection(targetWindow)
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(event.clientX, event.clientY)
  } else if (event.rangeParent && domSelection !== null) {
    domSelection.collapse(event.rangeParent, event.rangeOffset || 0)
    range = domSelection.getRangeAt(0)
  } else {
    throw Error('Cannot get the selection when dragging')
  }

  return range
}

import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import type { LexicalEditor, NodeKey, NodeSelection, RangeSelection } from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { LexicalNestedComposer } from '@lexical/react/LexicalNestedComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { useLexicalNodeSelection } from '@lexical/react/useLexicalNodeSelection'
import { mergeRegister } from '@lexical/utils'
import type { Position } from './InlineImageNode'

import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  $setSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  DRAGSTART_COMMAND,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
  KEY_ENTER_COMMAND,
  KEY_ESCAPE_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical'

import ContentEditable from '../ui/ContentEditable'
import { $isInlineImageNode } from './InlineImageNode'
import { Button } from '../../../Button/Button'
import { ButtonGroup } from '../../../ButtonGroup/ButtonGroup'
import { ImageModal } from '../utils/ImageModal'

const imageCache = new Set()

function useSuspenseImage(src: string) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        imageCache.add(src)
        resolve(null)
      }
    })
  }
}

function LazyImage({
  altText,
  className,
  imageRef,
  src,
  width,
  height,
  position,
}: {
  altText: string
  className: string | null
  height: 'inherit' | number
  imageRef: { current: null | HTMLImageElement }
  src: string
  width: 'inherit' | number
  position: Position
}): JSX.Element {
  useSuspenseImage(src)
  return (
    <img
      className={className || undefined}
      src={src}
      alt={altText}
      ref={imageRef}
      data-position={position}
      style={{
        height,
        width,
        display: 'block',
      }}
      draggable="false"
    />
  )
}

export default function InlineImageComponent({
  src,
  altText,
  nodeKey,
  width,
  height,
  showCaption,
  caption,
  position,
}: {
  altText: string
  caption: LexicalEditor
  height: 'inherit' | number
  nodeKey: NodeKey
  showCaption: boolean
  src: string
  width: 'inherit' | number
  position: Position
}): JSX.Element {
  const imageRef = useRef<null | HTMLImageElement>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(nodeKey)
  const [editor] = useLexicalComposerContext()
  const [selection, setSelection] = useState<RangeSelection | NodeSelection | null>(null)
  const activeEditorRef = useRef<LexicalEditor | null>(null)

  const deleteNode = (event: React.MouseEvent<HTMLButtonElement>) => {
    editor.update(() => {
      if (isSelected && $isNodeSelection($getSelection())) {
        event.preventDefault()
        const node = $getNodeByKey(nodeKey)
        if ($isInlineImageNode(node)) {
          node?.remove()
        }
        setSelected(false)
      }
    })
  }

  const onDelete = useCallback(
    (payload: KeyboardEvent) => {
      if (isSelected && $isNodeSelection($getSelection())) {
        const event: KeyboardEvent = payload
        event.preventDefault()
        const node = $getNodeByKey(nodeKey)
        if ($isInlineImageNode(node)) {
          node?.remove()
        }
        setSelected(false)
      }
      return false
    },
    [isSelected, nodeKey, setSelected],
  )

  const onEnter = useCallback(
    (event: KeyboardEvent) => {
      const latestSelection = $getSelection()
      const buttonElem = buttonRef.current
      if (isSelected && $isNodeSelection(latestSelection) && latestSelection.getNodes().length === 1) {
        if (showCaption) {
          // Move focus into nested editor
          $setSelection(null)
          event.preventDefault()
          caption.focus()
          return true
        } else if (buttonElem !== null && buttonElem !== document.activeElement) {
          event.preventDefault()
          buttonElem.focus()
          return true
        }
      }
      return false
    },
    [caption, isSelected, showCaption],
  )

  const onEscape = useCallback(
    (event: KeyboardEvent) => {
      if (activeEditorRef.current === caption || buttonRef.current === event.target) {
        $setSelection(null)
        editor.update(() => {
          setSelected(true)
          const parentRootElement = editor.getRootElement()
          if (parentRootElement !== null) {
            parentRootElement.focus()
          }
        })
        return true
      }
      return false
    },
    [caption, editor, setSelected],
  )

  useEffect(() => {
    let isMounted = true
    const unregister = mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        if (isMounted && editorState) {
          setSelection(editorState.read(() => $getSelection() as RangeSelection | NodeSelection | null))
        }
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_, activeEditor) => {
          activeEditorRef.current = activeEditor
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand<MouseEvent>(
        CLICK_COMMAND,
        (payload) => {
          const event = payload
          if (event.target === imageRef.current) {
            if (event.shiftKey) {
              setSelected(!isSelected)
            } else {
              clearSelection()
              setSelected(true)
            }
            return true
          }

          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        DRAGSTART_COMMAND,
        (event) => {
          if (event.target === imageRef.current) {
            // TODO This is just a temporary workaround for FF to behave like other browsers.
            // Ideally, this handles drag & drop too (and all browsers).
            event.preventDefault()
            return true
          }
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(KEY_DELETE_COMMAND, onDelete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_BACKSPACE_COMMAND, onDelete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_ENTER_COMMAND, onEnter, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_ESCAPE_COMMAND, onEscape, COMMAND_PRIORITY_LOW),
    )
    return () => {
      isMounted = false
      unregister()
    }
  }, [clearSelection, editor, isSelected, nodeKey, onDelete, onEnter, onEscape, setSelected])

  const [ModalOpen, setModalOpen] = useState(false)

  const draggable = isSelected && $isNodeSelection(selection)
  const isFocused = isSelected

  return (
    <Suspense fallback={null}>
      <span className="image-wrapper" draggable={draggable}>
        <ButtonGroup>
          <Button
            color="grey"
            isSmall
            onClick={() => {
              setModalOpen(true)
            }}
            title="Edit"
            isDisabled={!isSelected}
          />
          <Button isSmall title="Delete" onClick={deleteNode} isDisabled={!isSelected}></Button>
        </ButtonGroup>

        <LazyImage
          className={`${isFocused ? `focused ${$isNodeSelection(selection) ? 'draggable' : ''}` : ''} !my-2`}
          src={src}
          altText={altText}
          imageRef={imageRef}
          width={width}
          height={height}
          position={position}
        />
      </span>
      {showCaption && (
        <div className="image-caption-container relative">
          <LexicalNestedComposer initialEditor={caption}>
            <RichTextPlugin
              contentEditable={<ContentEditable className="border-0 block relative" />}
              placeholder={
                <div className="prose prose-lg prose-rds md:prose-xl text-cu-black-400 absolute top-0">
                  Enter a caption...
                </div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
          </LexicalNestedComposer>
        </div>
      )}
      <ImageModal
        activeEditor={editor}
        triggerModalOpen={ModalOpen}
        setTriggerModalOpen={setModalOpen}
        nodeKey={nodeKey}
      />
    </Suspense>
  )
}

// ParagraphPlaceholderPlugin.tsx

import { useEffect, useRef } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getRoot, $getSelection, $isElementNode, $isParagraphNode, $isRangeSelection } from 'lexical'
import { InlineImageNode } from '../nodes/InlineImageNode'

type ParagraphPlaceholderPluginProps = {
  placeholder: string
  hideOnEmptyEditor?: boolean
}

const tailwindPlaceholderClasses = [
  'after:float-left',
  'after:text-cu-black-400',
  'after:-mt-[35px]',
  'after:pointer-events-none',
  'after:h-0',
  'after:content-[attr(data-placeholder)]',
]

export const ParagraphPlaceholderPlugin = ({ placeholder, hideOnEmptyEditor }: ParagraphPlaceholderPluginProps) => {
  const [editor] = useLexicalComposerContext()
  const paragraphRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const removeUpdateListener = editor.registerUpdateListener(({ editorState }) => {
      const nativeSelection = window.getSelection()

      editorState.read(() => {
        // Cleanup
        if (paragraphRef?.current) {
          paragraphRef.current.removeAttribute('data-placeholder')
          paragraphRef.current.classList.remove(...tailwindPlaceholderClasses)
          paragraphRef.current = null
        }

        const selection = $getSelection()

        if (!nativeSelection || !selection || !$isRangeSelection(selection)) return

        const parentNode = selection.anchor.getNode()

        const textContentSize = $getRoot().getTextContentSize()

        let hasImageNode = false

        if ($isElementNode(parentNode)) {
          const children = parentNode.getChildren()
          for (const child of children) {
            if (child instanceof InlineImageNode) {
              hasImageNode = true
              break
            }
          }
        }

        if (hideOnEmptyEditor) {
          // Prevent from showing when editor is empty
          // Showing a placeholder in the first empty paragraph might conflict with the RichTextPlugin placeholder

          if (!textContentSize && !hasImageNode) return
        }

        if ((!$isParagraphNode(parentNode) || !parentNode.isEmpty()) && !hasImageNode) {
          return
        }

        // It's a paragraph node, it's empty, and it's selected

        // Now switch over to the native selection to get the paragraph DOM element

        const paragraphDOMElement = nativeSelection.anchorNode

        if (!paragraphDOMElement) return

        if (paragraphDOMElement instanceof HTMLParagraphElement) {
          paragraphRef.current = paragraphDOMElement
          paragraphRef.current.setAttribute('data-placeholder', placeholder)
          paragraphRef.current.classList.add(...tailwindPlaceholderClasses)
        }
      })
    })

    return () => {
      removeUpdateListener()
    }
  }, [editor, hideOnEmptyEditor, placeholder])

  return null
}

/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useEffect } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $wrapNodeInElement, mergeRegister } from '@lexical/utils'
import {
  $createParagraphNode,
  $insertNodes,
  $isRootOrShadowRoot,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  LexicalCommand,
} from 'lexical'
import { InlineImagePayload } from './../nodes/InlineImageNode'
import { $createInlineImageNode } from '../nodes/InlineImageNode'

export const CAN_USE_DOM: boolean =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'

export type InsertInlineImagePayload = Readonly<InlineImagePayload>

export const INSERT_INLINE_IMAGE_COMMAND: LexicalCommand<InlineImagePayload> =
  createCommand('INSERT_INLINE_IMAGE_COMMAND')

const InlineImagePlugin = ({ captionsEnabled }: { captionsEnabled?: boolean }): JSX.Element | null => {
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
    )
  }, [captionsEnabled, editor])

  return null
}

export default InlineImagePlugin

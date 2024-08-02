import { Dispatch, SetStateAction, useEffect } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $wrapNodeInElement, mergeRegister } from '@lexical/utils'
import { $createParagraphNode, $insertNodes, $isRootOrShadowRoot, COMMAND_PRIORITY_EDITOR } from 'lexical'
import { InlineImagePayload } from './../nodes/InlineImageNode'
import { $createInlineImageNode } from '../nodes/InlineImageNode'
import { IsDomAvailable } from '../utils/domAvailability'
import { INSERT_INLINE_IMAGE_COMMAND } from '../utils/insertInlineImageCommand'

export type InsertInlineImagePayload = Readonly<InlineImagePayload>

export default function InlineImagePlugin({
  captionsEnabled,
  setCaptionsEnabled,
}: {
  captionsEnabled?: boolean
  setCaptionsEnabled: Dispatch<SetStateAction<boolean>>
}): JSX.Element | null {
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

          setCaptionsEnabled(true)

          return true
        },
        COMMAND_PRIORITY_EDITOR,
      ),
    )
  }, [captionsEnabled, setCaptionsEnabled, editor])

  return null
}

if (IsDomAvailable) {
  const TRANSPARENT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  const img = document.createElement('img')
  img.src = TRANSPARENT_IMAGE
}

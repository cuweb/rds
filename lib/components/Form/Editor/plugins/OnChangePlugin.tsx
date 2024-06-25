import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getRoot } from 'lexical'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useEffect } from 'react'
import { InlineImageNode } from '../nodes/InlineImageNode' // Import your custom node

interface OnChangePluginProps {
  onChange: (htmlString: string | null) => void
  required: boolean
  disable: boolean
}

function OnChangePlugin({ onChange, required, disable }: OnChangePluginProps) {
  const [editor] = useLexicalComposerContext()

  const checkIfEditorIsEmpty = () => {
    const root = $getRoot()
    const children = root.getChildren()
    if (children.length === 0) return true

    return children.every((child) => {
      const childType = child.getType()
      if (childType === 'text') {
        return child.getTextContent().trim() === ''
      }
      if (childType === InlineImageNode.getType()) {
        return false
      }
      return false
    })
  }

  useEffect(() => {
    const handleUpdate = () => {
      editor.update(() => {
        const htmlString = $generateHtmlFromNodes(editor, null)
        const isEditorEmpty = checkIfEditorIsEmpty()
        const emptyState = required ? null : ''
        onChange(!isEditorEmpty ? htmlString : emptyState)
      })
    }

    const unregisterUpdateListener = editor.registerUpdateListener(handleUpdate)

    return () => {
      unregisterUpdateListener()
    }
  }, [editor, onChange, required])

  useEffect(() => {
    editor.setEditable(!disable)
  }, [editor, disable])

  return null
}

export default OnChangePlugin

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getRoot } from 'lexical'
import { $generateHtmlFromNodes } from '@lexical/html'
import { useEffect } from 'react'

interface OnChangePluginProps {
  onChange: (htmlString: string | null) => void
  required: boolean
  disabled: boolean
}

function OnChangePlugin({ onChange, required, disabled }: OnChangePluginProps) {
  const [editor] = useLexicalComposerContext()

  const checkIfEditorIsEmpty = () => {
    const root = $getRoot()
    const children = root.getChildren()
    if (children.length === 0) return true

    return children.every((child) => {
      return child.getTextContent().trim() === ''
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
    editor.setEditable(!disabled)
  }, [editor, disabled])

  return null
}

export default OnChangePlugin

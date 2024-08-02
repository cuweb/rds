import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { ListItemNode, ListNode } from '@lexical/list'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TRANSFORMERS } from '@lexical/markdown'
import { $getRoot, $createParagraphNode, $createTextNode, LexicalEditor } from 'lexical'
import { $generateNodesFromDOM } from '@lexical/html'
import EditorTheme from './themes/EditorTheme'
import './styles.css'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
// import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import AutoLinkPlugin from './plugins/AutoLinkPlugin'
import { FormField } from '../FormField/FormField'
import OnChangePlugin from './plugins/OnChangePlugin'
import InlineImagePlugin from './plugins/InlineImagePlugin'
import { InlineImageNode } from './nodes/InlineImageNode'
// import TreeViewPlugin from './plugins/TreeViewPlugin'
// import RichTextEditorHit from './utils/RichTextEditorHit'
import { useState } from 'react'
import { ParagraphPlaceholderPlugin } from './plugins/ParagraphPlaceholderPlugin'
import { useFormikContext } from 'formik'

export interface EditorProps {
  name: string
  label: string
  helper?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
}

const initialValueLoader = (editor: LexicalEditor, initialValue?: string) => {
  if (initialValue) {
    const parser = new DOMParser()
    const dom = parser.parseFromString(initialValue, 'text/html')
    // check if html format
    if (Array.from(dom.body.childNodes).some((node) => node.nodeType === 1)) {
      const nodes = $generateNodesFromDOM(editor, dom)
      const root = $getRoot()
      root.clear()
      nodes.forEach((n) => root.append(n))
    } else {
      // If not in HTML format, consider it as plain text and wrap it in a <p> tag
      const root = $getRoot()
      root.clear()
      const paragraphNode = $createParagraphNode()
      const textNode = $createTextNode(initialValue)
      paragraphNode.append(textNode)
      root.append(paragraphNode)
    }
  }
}

const editorConfig = (initialValue?: string) => {
  return {
    namespace: 'editor',
    theme: EditorTheme,
    onError(error: unknown) {
      throw error
    },
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      AutoLinkNode,
      LinkNode,
      InlineImageNode,
    ],
    editorState: (editor: LexicalEditor) => {
      initialValueLoader(editor, initialValue)
    },
  }
}

export interface OnChangePluginProps {
  onChange: (htmlString: string | null) => void
  required: boolean
  disabled: boolean
}

export const Editor = ({ ...props }: EditorProps) => {
  const {
    name,
    label,
    value,
    placeholder = 'Start typing your content here...',
    disabled = false,
    required = false,
    ...rest
  } = props

  const { setFieldValue } = useFormikContext<string>()

  const [captionsEnabled, setCaptionsEnabled] = useState(false)

  const onChange = (htmlString: string | null) => {
    setCaptionsEnabled(htmlString ? true : false)
    setFieldValue(name, htmlString)
  }

  const editorClass = disabled ? 'cu-editor__disabled' : ''

  return (
    <FormField name={name} label={label} required={required} {...rest}>
      <LexicalComposer initialConfig={editorConfig(value)}>
        <div className={`cu-editor ` + editorClass}>
          <ToolbarPlugin name={name} />
          <div className="cu-editor-content">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="cu-editor-richtext prose prose-lg prose-rds md:prose-xl prose-img:w-full prose-img:rounded-lg max-w-full first:mt-0 last:mb-0 outline-none" />
              }
              placeholder={
                <p className="cu-editor-placeholder prose prose-lg prose-rds md:prose-xl text-cu-black-400">
                  {placeholder}
                </p>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <ParagraphPlaceholderPlugin placeholder={placeholder} hideOnEmptyEditor />
            <HistoryPlugin />
            <InlineImagePlugin captionsEnabled={captionsEnabled} setCaptionsEnabled={setCaptionsEnabled} />
            {/* <RichTextEditorHit captionsEnabled={captionsEnabled} placeholder={placeholder} /> */}
            <AutoFocusPlugin />
            {/* <CodeHighlightPlugin /> */}
            {/* <CustomPlaceholderPlugin /> */}
            <ListPlugin />
            <LinkPlugin />
            <AutoLinkPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <OnChangePlugin onChange={onChange} required={required} disabled={disabled} />
          </div>
        </div>
      </LexicalComposer>
    </FormField>
  )
}

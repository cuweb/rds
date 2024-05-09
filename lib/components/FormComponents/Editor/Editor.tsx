/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { $getRoot } from 'lexical'
import { $generateNodesFromDOM, $generateHtmlFromNodes } from '@lexical/html'
import { $isRootTextContentEmpty } from '@lexical/text'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import EditorTheme from './themes/EditorTheme'
import './styles.css'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import AutoLinkPlugin from './plugins/AutoLinkPlugin'
import { FormField } from '../FormField/FormField'
import Error from '../Error/Error'

// import TreeViewPlugin from './plugins/TreeViewPlugin'

export interface EditorProps {
  name: string
  label: string
  setEditorContent: any
  helper?: string
  value?: string
  placeholder?: string
  disable?: boolean
  required?: boolean
  errorMessage?: string
}

const initialValueLoader = (editor: any, initialValue?: string) => {
  if (initialValue) {
    const parser = new DOMParser()
    const dom = parser.parseFromString(initialValue, 'text/html')
    // check if html format
    if (Array.from(dom.body.childNodes).some((node) => node.nodeType === 1)) {
      const nodes = $generateNodesFromDOM(editor, dom)
      const root = $getRoot()
      root.clear()
      nodes.forEach((n) => root.append(n))
    }
  }
}

const editorConfig = (editable: boolean, initialValue?: string) => {
  return {
    namespace: 'editor',
    theme: EditorTheme,
    onError(error: unknown) {
      throw error
    },
    nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, AutoLinkNode, LinkNode],
    editorState: (editor: any) => {
      initialValueLoader(editor, initialValue)
    },
    editable: editable,
  }
}

function OnChangePlugin({ onChange, required }: any) {
  const [editor] = useLexicalComposerContext()

  const emptyState = required ? null : ''

  editor.update(() => {
    const htmlString = $generateHtmlFromNodes(editor, null)
    const isEditorEmpty = $isRootTextContentEmpty(editor.isComposing(), true)
    return onChange(!isEditorEmpty ? htmlString : emptyState)
  })

  return emptyState
}

export const Editor = ({ ...props }: EditorProps) => {
  const {
    name,
    label,
    setEditorContent,
    value,
    placeholder = 'Enter some text...',
    disable = false,
    required,
    errorMessage,
    ...rest
  } = props

  function onChange(htmlString: string) {
    setEditorContent(htmlString)
  }

  return (
    <FormField name={name} label={label} required={required} {...rest}>
      <LexicalComposer initialConfig={editorConfig(!disable, value)}>
        <div className="cu-editor">
          <ToolbarPlugin name={name} />
          <div className="cu-editor-content">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="prose prose-lg prose-rds md:prose-xl prose-img:w-full prose-img:rounded-lg max-w-full first:mt-0 last:mb-0" />
              }
              placeholder={
                <p className="cu-editor-placeholder prose prose-lg prose-rds md:prose-xl text-cu-black-400">
                  {placeholder}
                </p>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            {/* <TreeViewPlugin /> */}
            <HistoryPlugin />
            <AutoFocusPlugin />
            <CodeHighlightPlugin />
            <ListPlugin />
            <LinkPlugin />
            <AutoLinkPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <OnChangePlugin onChange={onChange} required={required} />
          </div>
        </div>
      </LexicalComposer>

      {errorMessage && required && <Error>{errorMessage}</Error>}
    </FormField>
  )
}

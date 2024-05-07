/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { ListItemNode, ListNode } from '@lexical/list'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TRANSFORMERS } from '@lexical/markdown'
import { $getRoot, $createParagraphNode } from 'lexical'
import { $generateNodesFromDOM } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import EditorTheme from './themes/EditorTheme'
import './styles.css'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import AutoLinkPlugin from './plugins/AutoLinkPlugin'
// import TreeViewPlugin from './plugins/TreeViewPlugin'

const initialValueLoader = (editor: any, initialValue?: string) => {
  if (initialValue) {
    const parser = new DOMParser()
    const dom = parser.parseFromString(initialValue, 'text/html')
    const nodes = $generateNodesFromDOM(editor, dom)
    const root = $getRoot()
    root.clear()
    const paragraphNode = $createParagraphNode()
    nodes.forEach((n) => paragraphNode.append(n))
    root.append(paragraphNode)
  }
}

const editorConfig = (initialValue?: string) => {
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
  }
}

function OnChangePlugin({ onChange }: any) {
  const [editor] = useLexicalComposerContext()
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState)
    })
  }, [editor, onChange])
  return null
}

export const Editor = ({ value, placeholder, setEditorContent }: any) => {
  function onChange(editorState: any) {
    const editorStateJSON = editorState.toJSON()
    setEditorContent(JSON.stringify(editorStateJSON))
  }

  const placeHolderText = placeholder ?? 'Enter some text...'

  return (
    <div className="w-full">
      <div className={'prose prose-lg prose-rds md:prose-xl prose-img:w-full prose-img:rounded-lg'}>
        <LexicalComposer initialConfig={editorConfig(value)}>
          <div className="editor-container">
            <ToolbarPlugin />
            <div className="editor-inner relative">
              <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input" />}
                placeholder={<div className="editor-placeholder">{placeHolderText}</div>}
                ErrorBoundary={LexicalErrorBoundary}
              />
              {/* <TreeViewPlugin /> */}
              <AutoFocusPlugin />
              <CodeHighlightPlugin />
              <ListPlugin />
              <LinkPlugin />
              <AutoLinkPlugin />
              <ListMaxIndentLevelPlugin maxDepth={7} />
              <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
              <OnChangePlugin onChange={onChange} />
            </div>
          </div>
        </LexicalComposer>
      </div>
    </div>
  )
}

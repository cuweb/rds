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
import AutoLinkPlugin from './plugins/AutoLinkPlugin'
import { FormField } from '../FormField/FormField'
import OnChangePlugin from './plugins/OnChangePlugin'
import InlineImagePlugin from './plugins/InlineImagePlugin'
import { InlineImageNode } from './nodes/InlineImageNode'
// import TreeViewPlugin from './plugins/TreeViewPlugin'
// import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
// import RichTextEditorHit from './utils/RichTextEditorHit'
import { useEffect, useState } from 'react'
import { ParagraphPlaceholderPlugin } from './plugins/ParagraphPlaceholderPlugin'
import { useFormikContext } from 'formik'
import useErrorClass from '../UseError'
import { FieldProps } from '../FormField/FormField'
import { deleteImage } from '../../../utils/AWS'

export interface EditorProps extends FieldProps, React.HTMLAttributes<HTMLDivElement> {
  name: string
  label: string
  value: string
  helper?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFormSubmit: (f: () => Promise<void>) => void
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

export const Editor = ({ ...props }: EditorProps) => {
  const {
    name,
    label,
    maxWidth,
    helper,
    helperpostop,
    required = false,
    disabled = false,
    displayError,
    hiddenLabel,
    value,
    placeholder = 'Start typing your content here...',
    onChange,
    onFormSubmit,
    ...rest
  } = props

  const [editorContent, setEditorContent] = useState<string | null>(null)
  const [images, setImages] = useState<string[]>([])

  const { setFieldValue } = useFormikContext<string>()

  const onDefaultChange = (htmlString: string | null) => {
    setFieldValue(name, htmlString)
    setEditorContent(htmlString)

    if (onChange) {
      onChange({
        target: {
          name,
          value: name,
        },
      } as React.ChangeEvent<HTMLInputElement>)
    }
  }

  const errorClass = useErrorClass(name)

  const editorClass = disabled ? 'cu-editor__disabled' : ''

  const AWSImagesCleanup = async () => {
    if (images.length && editorContent) {
      console.log('🚀 ~ Editor ~ images:', images)
      await Promise.all(
        images.map(async (image) => {
          if (!editorContent.includes(image)) {
            try {
              const fileName = image.split('/').pop()
              if (fileName) {
                await deleteImage(fileName)
              }
            } catch (error) {
              console.log(error)
            }
          }
        }),
      )
    }
  }

  useEffect(() => {
    if (images.length && editorContent) {
      onFormSubmit(AWSImagesCleanup)
    }
  }, [images, editorContent])

  return (
    <FormField
      name={name}
      label={label}
      maxWidth={maxWidth}
      helper={helper}
      helperpostop={helperpostop}
      required={required}
      displayError={displayError}
      hiddenLabel={hiddenLabel}
    >
      <LexicalComposer initialConfig={editorConfig(value)}>
        <div className={`cu-editor ` + editorClass + errorClass}>
          <ToolbarPlugin name={name} />
          <div className="cu-editor-content">
            <RichTextPlugin
              contentEditable={
                <ContentEditable
                  className="cu-editor-richtext prose prose-lg prose-rds md:prose-xl prose-img:w-full prose-img:rounded-lg max-w-full first:mt-0 last:mb-0 outline-none"
                  aria-placeholder={placeholder}
                  placeholder={
                    <p className="cu-editor-placeholder prose prose-lg prose-rds md:prose-xl text-cu-black-400">
                      {placeholder}
                    </p>
                  }
                  {...rest}
                />
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
            <InlineImagePlugin setImages={setImages} />
            <AutoFocusPlugin />
            <ListPlugin />
            <LinkPlugin />
            <AutoLinkPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <OnChangePlugin onChange={onDefaultChange} required={required} disabled={disabled} />
          </div>
        </div>
      </LexicalComposer>
    </FormField>
  )
}

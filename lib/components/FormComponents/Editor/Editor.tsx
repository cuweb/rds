/* eslint-disable @typescript-eslint/no-explicit-any */
import ExampleTheme from './themes/ExampleTheme'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import './styles.css'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { ListItemNode, ListNode } from '@lexical/list'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TRANSFORMERS } from '@lexical/markdown'
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import AutoLinkPlugin from './plugins/AutoLinkPlugin'
import TreeViewPlugin from './plugins/TreeViewPlugin'
import { $createParagraphNode } from 'lexical'
import { $generateNodesFromDOM } from '@lexical/html'
import { $getRoot } from 'lexical'

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>
}

// const loadContent = () => {
//   const InitialData = {
//     root: {
//       children: [
//         {
//           children: [
//             {
//               detail: 0,
//               format: 0,
//               mode: 'normal',
//               style: '',
//               text: 'Text 1',
//               type: 'text',
//               version: 1,
//             },
//           ],
//           direction: 'ltr',
//           format: '',
//           indent: 0,
//           type: 'paragraph',
//           version: 1,
//           textFormat: 0,
//         },
//         {
//           children: [
//             {
//               detail: 0,
//               format: 0,
//               mode: 'normal',
//               style: '',
//               text: 'Text 2',
//               type: 'text',
//               version: 1,
//             },
//           ],
//           direction: 'ltr',
//           format: '',
//           indent: 0,
//           type: 'paragraph',
//           version: 1,
//           textFormat: 0,
//         },
//       ],
//       direction: 'ltr',
//       format: '',
//       indent: 0,
//       type: 'root',
//       version: 1,
//     },
//   }

//   const InitialDataStringify = JSON.stringify(InitialData)

//   return InitialDataStringify
// }

const initialValue =
  '<h2>H2 Heading</h2> <p>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien. </p><p> Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id. </p><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt=""> <ul> <li>Quis elit egestas venenatis mattis dignissim.</li><li> Cras cras lobortis vitae vivamus ultricies facilisis tempus. </li><li>Orci in sit morbi dignissim metus diam arcu pretium.</li></ul> <p> Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim. </p><h3>H3 Heading</h3> <p> Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam. </p><blockquote> <p> Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. </p></blockquote> <p> Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. </p><h4>H4 Heading</h4> <p> Purus morbi dignissim senectus mattis <a href="#">adipiscing</a> . Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam. </p><p> Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. </p><ol> <li>Quis elit egestas venenatis mattis dignissim.</li><li> Cras cras lobortis vitae vivamus ultricies facilisis tempus. </li><li>Orci in sit morbi dignissim metus diam arcu pretium.</li></ol> <p> Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. </p>'

const editorConfig = {
  namespace: 'editor',
  theme: ExampleTheme,
  onError(error: unknown) {
    throw error
  },
  nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, AutoLinkNode, LinkNode],
  // editorState: loadContent(),
  editorState: (editor: any) => {
    const parser = new DOMParser()
    const dom = parser.parseFromString(initialValue, 'text/html')
    const nodes = $generateNodesFromDOM(editor, dom)
    const root = $getRoot()
    root.clear()

    const paragraphNode = $createParagraphNode()

    nodes.forEach((n) => paragraphNode.append(n))

    root.append(paragraphNode)
  },
}

export const Editor = ({ setEditorContent }: any) => {
  setEditorContent('test')
  return (
    <div id="editor-wrapper" className={'prose prose-lg prose-rds md:prose-xl prose-img:w-full prose-img:rounded-lg'}>
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <TreeViewPlugin />
            <AutoFocusPlugin />
            <CodeHighlightPlugin />
            <ListPlugin />
            <LinkPlugin />
            <AutoLinkPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          </div>
        </div>
      </LexicalComposer>
    </div>
  )
}

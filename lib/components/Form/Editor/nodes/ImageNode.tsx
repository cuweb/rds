import { DecoratorNode, SerializedLexicalNode } from 'lexical'

interface SerializedImageNode extends SerializedLexicalNode {
  src: string
}
interface ImageNodeProps {
  src: string
}

class ImageNode extends DecoratorNode<ImageNodeProps> {
  __src: string

  static getType() {
    return 'image'
  }

  static clone(node: ImageNode) {
    return new ImageNode(node.__src, node.__key)
  }

  constructor(src: string, key?: string) {
    super(key)
    this.__src = src
  }

  createDOM(): HTMLElement {
    const img = document.createElement('img')
    img.src = this.__src
    img.style.maxWidth = '100%'
    return img
  }

  updateDOM(): boolean {
    return false
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    return new ImageNode(serializedNode.src)
  }

  exportJSON(): SerializedImageNode {
    return {
      ...super.exportJSON(),
      src: this.__src,
    }
  }

  decorate(): JSX.Element {
    return <ImageComponent src={this.__src} />
  }
}

const ImageComponent: React.FC<{ src: string }> = ({ src }) => {
  return <img src={src} style={{ maxWidth: '100%' }} alt="Uploaded" />
}

export function $createImageNode(src: string): ImageNode {
  return new ImageNode(src)
}

export { ImageNode }

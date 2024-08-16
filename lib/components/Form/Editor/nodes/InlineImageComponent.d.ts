import { NodeKey } from 'lexical';
export default function InlineImageComponent({ src, altText, nodeKey, showCaption, caption, }: {
    altText: string;
    caption: string;
    nodeKey: NodeKey;
    showCaption: boolean;
    src: string;
}): JSX.Element;

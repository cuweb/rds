import { NodeKey } from 'lexical';
import { Position } from './InlineImageNode';

export default function InlineImageComponent({ src, altText, nodeKey, width, height, showCaption, caption, position, }: {
    altText: string;
    caption: string;
    height: 'inherit' | number;
    nodeKey: NodeKey;
    showCaption: boolean;
    src: string;
    width: 'inherit' | number;
    position: Position;
}): JSX.Element;

import { DOMConversionMap, DOMExportOutput, LexicalNode, NodeKey, SerializedLexicalNode, Spread, DecoratorNode } from 'lexical';

export type Position = 'left' | 'right' | 'full' | undefined;
export interface InlineImagePayload {
    altText: string;
    caption?: string;
    height?: number;
    key?: NodeKey;
    showCaption?: boolean;
    src: string;
    width?: number;
    position?: Position;
}
export interface UpdateInlineImagePayload {
    altText?: string;
    showCaption?: boolean;
    position?: Position;
    caption?: string;
}
export type SerializedInlineImageNode = Spread<{
    altText: string;
    caption: string;
    height?: number;
    showCaption: boolean;
    src: string;
    width?: number;
    position?: Position;
}, SerializedLexicalNode>;
export declare class InlineImageNode extends DecoratorNode<JSX.Element> {
    __src: string;
    __altText: string;
    __width: 'inherit' | number;
    __height: 'inherit' | number;
    __showCaption: boolean;
    __caption: string;
    __position: Position;
    static getType(): string;
    static clone(node: InlineImageNode): InlineImageNode;
    static importJSON(serializedNode: SerializedInlineImageNode): InlineImageNode;
    static importDOM(): DOMConversionMap | null;
    constructor(src: string, altText: string, position: Position, width?: 'inherit' | number, height?: 'inherit' | number, showCaption?: boolean, caption?: string, key?: NodeKey);
    exportDOM(): DOMExportOutput;
    exportJSON(): SerializedInlineImageNode;
    getSrc(): string;
    getAltText(): string;
    setAltText(altText: string): void;
    setWidthAndHeight(width: 'inherit' | number, height: 'inherit' | number): void;
    getCaption(): string;
    setCaption(caption: string): void;
    getShowCaption(): boolean;
    setShowCaption(showCaption: boolean): void;
    getPosition(): Position;
    setPosition(position: Position): void;
    update(payload: UpdateInlineImagePayload): void;
    createDOM(): HTMLElement;
    updateDOM(prevNode: InlineImageNode, dom: HTMLElement): false;
    decorate(): JSX.Element;
}
export declare function $createInlineImageNode({ altText, position, height, src, width, showCaption, caption, key, }: InlineImagePayload): InlineImageNode;
export declare function $isInlineImageNode(node: LexicalNode | null | undefined): node is InlineImageNode;

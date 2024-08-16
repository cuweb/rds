import { LexicalEditor, NodeKey } from 'lexical';
export declare const ImageModal: ({ activeEditor, triggerModalOpen, setTriggerModalOpen, nodeKey, }: {
    activeEditor: LexicalEditor;
    triggerModalOpen: boolean;
    setTriggerModalOpen: (isOpen: boolean) => void;
    nodeKey?: NodeKey;
}) => JSX.Element;

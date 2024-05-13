import { LexicalEditor } from 'lexical';

export interface BlockOptionsDropdownListProp {
    editor: LexicalEditor;
    blockType: string;
    toolbarRef: React.MutableRefObject<null>;
    setShowBlockOptionsDropDown: (value: boolean) => void;
}
export interface ToolbarPluginProps {
    name: string;
}
export default function ToolbarPlugin({ name }: ToolbarPluginProps): import("react/jsx-runtime").JSX.Element;

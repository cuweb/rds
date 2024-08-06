import { colSpanClasses, rowSpanClasses } from '../../utils/propClasses';

type colSpanKeys = keyof typeof colSpanClasses;
type rowSpanKeys = keyof typeof rowSpanClasses;
export interface ImageGridItemProps {
    children: React.ReactNode;
    colSpan?: colSpanKeys;
    rowSpan?: rowSpanKeys;
    title?: string;
    content?: string;
    link?: string;
}
export declare const ImageGridItem: ({ children, colSpan, rowSpan, title, content, link }: ImageGridItemProps) => import("react/jsx-runtime").JSX.Element;
export {};

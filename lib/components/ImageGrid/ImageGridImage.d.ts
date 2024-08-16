import { colSpanClasses, rowSpanClasses } from '../../utils/propClasses';
type colSpanKeys = keyof typeof colSpanClasses;
type rowSpanKeys = keyof typeof rowSpanClasses;
export interface ImageGridImageProps {
    children: React.ReactNode;
    colSpan?: colSpanKeys;
    rowSpan?: rowSpanKeys;
    title?: string;
    content?: string;
    link?: string;
}
export declare const ImageGridImage: {
    ({ children, colSpan, rowSpan, title, content, link, }: ImageGridImageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

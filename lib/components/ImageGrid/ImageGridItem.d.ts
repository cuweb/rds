import { rdsColSpan, rdsRowSpan } from '../../utils/optionClasses';

type colSpanKeys = keyof typeof rdsColSpan;
type rowSpanKeys = keyof typeof rdsRowSpan;
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

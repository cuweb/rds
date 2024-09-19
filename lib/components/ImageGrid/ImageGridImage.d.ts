import { colSpanClasses, rowSpanClasses, aspectRatioClasses } from '../../utils/propClasses';
type colSpanKeys = keyof typeof colSpanClasses;
type rowSpanKeys = keyof typeof rowSpanClasses;
type aspectRatioKeys = keyof typeof aspectRatioClasses;
export interface ImageGridImageProps {
    imageUrl: string;
    focalPointX?: number;
    focalPointY?: number;
    colSpan?: colSpanKeys;
    rowSpan?: rowSpanKeys;
    title?: string;
    content?: string;
    link?: string;
    aspectRatio?: aspectRatioKeys;
}
export declare const ImageGridImage: {
    ({ imageUrl, focalPointX, focalPointY, colSpan, rowSpan, title, content, link, aspectRatio, }: ImageGridImageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

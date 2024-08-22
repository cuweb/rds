import { default as React } from '../../../node_modules/react';
import { maxWidthClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
export interface ImageCoverProps {
    children?: React.ReactNode;
    maxWidth?: maxWidthKeys;
    imageUrl: string;
    imageZoom?: number;
    focalPointX?: string;
    focalPointY?: string;
}
export declare const ImageCover: ({ children, maxWidth, imageUrl, imageZoom, focalPointX, focalPointY, }: ImageCoverProps) => import("react/jsx-runtime").JSX.Element;
export {};

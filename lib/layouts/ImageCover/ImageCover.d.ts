import { default as React } from '../../../node_modules/react';
import { maxWidthClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
declare const opacityValues: number[];
export interface ImageCoverProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    maxWidth?: maxWidthKeys;
    image: string;
    imageZoom?: number;
    opacity?: (typeof opacityValues)[number];
    focalPointX?: string;
    focalPointY?: string;
}
export declare const ImageCover: ({ children, as, maxWidth, image, imageZoom, opacity, focalPointX, focalPointY, }: ImageCoverProps) => import("react/jsx-runtime").JSX.Element;
export {};

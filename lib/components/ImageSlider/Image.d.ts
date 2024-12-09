import { aspectRatioClasses } from '../../utils/propClasses';
type aspectRatioKeys = keyof typeof aspectRatioClasses;
export interface ImageProps {
    imageUrl: string;
    focalPointX?: number;
    focalPointY?: number;
    title?: string;
    link?: string;
    aspectRatio?: aspectRatioKeys;
}
export declare const Image: ({ imageUrl, focalPointX, focalPointY, title, link, aspectRatio, }: ImageProps) => import("react/jsx-runtime").JSX.Element;
export {};

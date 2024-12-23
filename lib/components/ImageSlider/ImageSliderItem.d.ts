import { aspectRatioClasses } from '../../utils/propClasses';
type aspectRatioKeys = keyof typeof aspectRatioClasses;
export interface ImageSliderItemProps {
    imageUrl: string;
    focalPointX?: number;
    focalPointY?: number;
    title?: string;
    link?: string;
    aspectRatio?: aspectRatioKeys;
}
export declare const ImageSliderItem: {
    ({ imageUrl, focalPointX, focalPointY, title, link, aspectRatio, }: ImageSliderItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

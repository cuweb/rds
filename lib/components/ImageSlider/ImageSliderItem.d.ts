import { aspectRatioClasses } from '../../utils/propClasses';
type aspectRatioKeys = keyof typeof aspectRatioClasses;
export interface ImageSliderItemProps {
    imageUrl: string;
    focalPointX?: number;
    focalPointY?: number;
    title?: string;
    link?: string;
    aspectRatio?: aspectRatioKeys;
    className?: string;
}
export declare const ImageSliderItem: {
    ({ imageUrl, focalPointX, focalPointY, title, link, aspectRatio, className, }: ImageSliderItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

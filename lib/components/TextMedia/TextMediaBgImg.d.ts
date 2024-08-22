import { borderWidthClasses } from '../../utils/propClasses';
type borderWidthKeys = keyof typeof borderWidthClasses;
export interface TextMediaBgImgProps {
    imageUrl: string;
    imageZoom?: number;
    focalPointX?: number;
    focalPointY?: number;
    border?: borderWidthKeys;
}
export declare const TextMediaBgImg: {
    ({ imageUrl, imageZoom, focalPointX, focalPointY, border, }: TextMediaBgImgProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

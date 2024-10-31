import { aspectRatioClasses } from '../utils/propClasses';
type aspectRatioKeys = keyof typeof aspectRatioClasses;
type IsliderData = {
    id: number;
    image: string;
    alt: string;
    link?: string;
    title?: string;
    focalPointX?: number;
    focalPointY?: number;
    aspectRatio?: aspectRatioKeys;
};
export declare const sliderData: IsliderData[];
export {};

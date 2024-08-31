import { justifyContentClasses } from '../../utils/propClasses';
type justifyContentKeys = keyof typeof justifyContentClasses;
declare const opacityValues: number[];
export interface FullBannerProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    title: string;
    image?: string;
    focalPointX?: number;
    focalPointY?: number;
    justify?: justifyContentKeys;
    opacity?: (typeof opacityValues)[number];
}
export declare const FullBanner: ({ children, as, title, image, focalPointX, focalPointY, opacity, justify, }: FullBannerProps) => import("react/jsx-runtime").JSX.Element;
export {};
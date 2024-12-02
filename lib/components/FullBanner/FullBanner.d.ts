import { justifyContentClasses, bgOpacityClasses } from '../../utils/propClasses';
type justifyContentKeys = keyof typeof justifyContentClasses;
type bgOpacityKeys = keyof typeof bgOpacityClasses;
export interface FullBannerProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    title: string;
    headerType?: 'h1' | 'h2';
    image?: string;
    justify?: justifyContentKeys;
    opacity?: bgOpacityKeys;
}
export declare const FullBanner: ({ children, as, title, headerType, image, opacity, justify, }: FullBannerProps) => import("react/jsx-runtime").JSX.Element;
export {};

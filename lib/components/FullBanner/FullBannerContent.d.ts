import { justifyContentClasses, bgOpacityClasses } from '../../utils/propClasses';
type justifyContentKeys = keyof typeof justifyContentClasses;
type bgOpacityKeys = keyof typeof bgOpacityClasses;
export interface FullBannerContentProps {
    children?: React.ReactNode;
    title: string;
    headerType?: 'h1' | 'h2';
    justify?: justifyContentKeys;
    opacity?: bgOpacityKeys;
}
export declare const FullBannerContent: {
    ({ children, title, headerType, opacity, justify, }: FullBannerContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

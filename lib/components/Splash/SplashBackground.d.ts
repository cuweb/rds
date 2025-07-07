import { gradientOpacityClasses } from './gradients';
type bgOpacityKeys = keyof typeof gradientOpacityClasses;
export type SplashBackgroundProps = {
    backgroundType: 'image';
    backgroundImage: string;
    opacity?: bgOpacityKeys;
} | {
    backgroundType: 'video';
    backgroundVideoName: string;
    mobileBackgroundImage: string;
    opacity?: bgOpacityKeys;
};
export declare const SplashBackground: {
    (props: SplashBackgroundProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

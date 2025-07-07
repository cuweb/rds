import { bgOpacityClasses } from '../../utils/propClasses';
type bgOpacityKeys = keyof typeof bgOpacityClasses;
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

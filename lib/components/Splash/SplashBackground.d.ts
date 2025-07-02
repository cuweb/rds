export type SplashBackgroundProps = {
    backgroundType: 'image';
    backgroundImage: string;
} | {
    backgroundType: 'video';
    backgroundVideoName: string;
    mobileBackgroundImage: string;
};
export declare const SplashBackground: {
    (props: SplashBackgroundProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

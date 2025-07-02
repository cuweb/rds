export interface SplashContentProps {
    logo?: 'default' | 'athletics';
    preHeader?: string;
    header?: string;
    children?: React.ReactNode;
    contentType?: 'buttons' | 'cards';
}
export interface SplashBaseProps extends SplashContentProps {
    backgroundType?: 'image' | 'video';
}
export declare const SplashContent: {
    ({ logo, preHeader, header, contentType, backgroundType, children }: SplashBaseProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

export interface ImageSliderProp {
    children: React.ReactNode;
    slidesPerViewDesktop: number;
    slidesPerViewTablet?: number;
    slidesPerViewMobile?: number;
}
export declare const ImageSliderWrapper: {
    ({ children, slidesPerViewDesktop, slidesPerViewTablet, slidesPerViewMobile, }: ImageSliderProp): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const ImageSlider: {
    ({ children, slidesPerViewDesktop, slidesPerViewTablet, slidesPerViewMobile, }: ImageSliderProp): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Item: {
        ({ imageUrl, focalPointX, focalPointY, title, link, aspectRatio, }: import('./ImageSliderItem').ImageSliderItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

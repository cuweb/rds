export interface ImageSliderProp {
    children: React.ReactNode;
    loop?: boolean;
    speed?: number;
    slidesPerViewMobile?: number;
    slidesPerViewTablet?: number;
    slidesPerViewDesktop: number;
    customClass?: string;
}
export declare const ImageSliderWrapper: {
    ({ children, loop, speed, slidesPerViewMobile, slidesPerViewTablet, slidesPerViewDesktop, customClass, }: ImageSliderProp): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const ImageSlider: {
    ({ children, loop, speed, slidesPerViewMobile, slidesPerViewTablet, slidesPerViewDesktop, customClass, }: ImageSliderProp): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Item: {
        ({ imageUrl, focalPointX, focalPointY, title, link, aspectRatio, className, }: import('./ImageSliderItem').ImageSliderItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

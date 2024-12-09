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
    Slide: ({ children, noSpace }: import('./Slide').SlideProps) => import("react/jsx-runtime").JSX.Element;
    Image: ({ imageUrl, focalPointX, focalPointY, title, link, aspectRatio, }: import('./Image').ImageProps) => import("react/jsx-runtime").JSX.Element;
};

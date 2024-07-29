declare const opacityValues: number[];
export interface ImageGridCaptionProps {
    title: string;
    content?: string;
    link?: string;
    opacity?: (typeof opacityValues)[number];
}
export declare const ImageGridCaption: ({ title, content, link, opacity }: ImageGridCaptionProps) => import("react/jsx-runtime").JSX.Element;
export {};

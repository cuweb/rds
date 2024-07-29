export interface ImageGridProps {
    children: React.ReactNode;
    maxWidth?: '5xl' | '7xl';
    gridGap?: '0' | '5' | '10';
    cols?: '2' | '3' | '4';
}
export declare const ImageGridWrapper: ({ children, maxWidth, gridGap, cols }: ImageGridProps) => import("react/jsx-runtime").JSX.Element;
export declare const ImageGrid: (({ children, maxWidth, gridGap, cols }: ImageGridProps) => import("react/jsx-runtime").JSX.Element) & {
    Caption: ({ title, content, link, opacity }: import('./ImageGridCaption').ImageGridCaptionProps) => import("react/jsx-runtime").JSX.Element;
};

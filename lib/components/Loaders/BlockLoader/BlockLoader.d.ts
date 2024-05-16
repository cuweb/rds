interface BlockLoaderProps {
    height: number;
    cols: 1 | 2 | 3 | 4 | '1/3' | '2/3';
}
export declare const BlockLoader: ({ height, cols }: BlockLoaderProps) => import("react/jsx-runtime").JSX.Element;
export {};

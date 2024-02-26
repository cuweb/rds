export interface HeadingProps {
    text: string;
    intro?: string;
    isCenter?: boolean;
    maxWidth?: 'full' | '5xl' | '7xl';
}
export declare const Heading: ({ text, intro, isCenter, maxWidth }: HeadingProps) => import("react/jsx-runtime").JSX.Element;

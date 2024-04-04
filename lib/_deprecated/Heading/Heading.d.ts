export interface HeadingProps {
    text: string;
    intro?: string;
    isCenter?: boolean;
    maxWidth?: 'full' | '5xl' | '7xl';
}
export declare const Heading: ({ text, intro, isCenter, maxWidth }: HeadingProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;

import { default as React } from '../../../node_modules/react';
import { justifyContentClasses } from '../../utils/propClasses';
type justifyContentKeys = keyof typeof justifyContentClasses;
export interface TextMediaContentProps {
    children: React.ReactNode;
    title: string;
    headerType?: 'h1' | 'h2';
    width?: number;
    align?: justifyContentKeys;
    hasUnderline?: boolean;
    isWhite?: boolean;
}
export declare const TextMediaContent: {
    ({ children, title, headerType, width, align, hasUnderline, isWhite, }: TextMediaContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

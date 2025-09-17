import { default as React } from '../../../node_modules/react';
import { justifyContentClasses } from '../../utils/propClasses';
type justifyContentKeys = keyof typeof justifyContentClasses;
export interface TextMediaContentProps {
    children?: React.ReactNode;
    title: string;
    headerType?: 'h1' | 'h2';
    metaData?: React.ReactNode;
    width?: number;
    align?: justifyContentKeys;
    hasUnderline?: boolean;
    isLight?: boolean;
    isWhite?: boolean;
}
export declare const TextMediaContent: {
    ({ children, title, headerType, metaData, width, align, hasUnderline, isLight, isWhite, }: TextMediaContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

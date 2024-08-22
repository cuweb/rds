import { default as React } from '../../../node_modules/react';
import { marginAutoClasses, borderWidthClasses, borderColorClasses } from '../../utils/propClasses';
type marginAutoKeys = keyof typeof marginAutoClasses;
type borderWidthKeys = keyof typeof borderWidthClasses;
type borderColorKeys = keyof typeof borderColorClasses;
export interface TextMediaAsideProps {
    children?: React.ReactNode;
    align?: marginAutoKeys;
    border?: borderWidthKeys;
    borderColor?: borderColorKeys;
}
export declare const TextMediaAside: {
    ({ children, align, border, borderColor }: TextMediaAsideProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

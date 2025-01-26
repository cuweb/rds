import { default as React } from '../../../node_modules/react';
import { marginAutoClasses } from '../../utils/propClasses';
type marginAutoKeys = keyof typeof marginAutoClasses;
export interface TextMediaAsideProps {
    children?: React.ReactNode;
    align?: marginAutoKeys;
    hasBorder?: boolean;
}
export declare const TextMediaAside: {
    ({ children, align, hasBorder }: TextMediaAsideProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

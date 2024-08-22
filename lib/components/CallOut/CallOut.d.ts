import { default as React } from '../../../node_modules/react';
import { maxWidthClasses, justifyContentClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
type justifyContentKeys = keyof typeof justifyContentClasses;
export interface CallOutProps {
    children?: React.ReactNode;
    title: string;
    justify?: justifyContentKeys;
    maxWidth?: maxWidthKeys;
}
export declare const CallOut: ({ children, title, maxWidth, justify }: CallOutProps) => import("react/jsx-runtime").JSX.Element;
export {};

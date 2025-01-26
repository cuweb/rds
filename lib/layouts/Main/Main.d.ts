import { default as React } from '../../../node_modules/react';
import { maxWidthClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
export interface MainProps {
    children: React.ReactNode;
    maxWidth?: maxWidthKeys;
    noProse?: boolean;
}
export declare const Main: ({ children, maxWidth, noProse }: MainProps) => import("react/jsx-runtime").JSX.Element;
export {};

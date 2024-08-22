import { default as React } from '../../../node_modules/react';
import { maxWidthClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
export interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    isGrey?: boolean;
    maxWidth?: maxWidthKeys;
    proseType?: 'none' | 'light' | 'dark';
}
export declare const Section: ({ children, as, proseType, isGrey, maxWidth, }: SectionProps) => import("react/jsx-runtime").JSX.Element;
export {};

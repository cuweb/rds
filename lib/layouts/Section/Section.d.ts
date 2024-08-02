import { default as React } from '../../../node_modules/react';

export interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    isGrey?: boolean;
    maxWidth?: 'none' | 'full' | '5xl' | '7xl';
}
export declare const Section: ({ children, as, isGrey, maxWidth }: SectionProps) => import("react/jsx-runtime").JSX.Element;

import { default as React } from '../../../node_modules/react';

export interface SectionProps {
    children?: React.ReactNode;
    maxWidth?: 'full' | '5xl' | '7xl';
    hasProse?: boolean;
}
export declare const Section: ({ children, maxWidth, hasProse }: SectionProps) => import("react/jsx-runtime").JSX.Element;

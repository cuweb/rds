import { default as React } from '../../../node_modules/react';

export interface ButtonGroupProps {
    children: React.ReactNode;
    gap?: 3 | 5;
    align?: 'left' | 'right' | 'center';
}
export declare const ButtonGroup: ({ children, gap, align }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;

import { default as React } from '../../../node_modules/react';
import { gridGapClasses, justifyContentClasses } from '../../utils/propClasses';
type gridGapKey = keyof typeof gridGapClasses;
type justifyContentKey = keyof typeof justifyContentClasses;
export interface ButtonGroupProps {
    children: React.ReactNode;
    gap?: gridGapKey;
    align?: justifyContentKey;
}
export declare const ButtonGroup: ({ children, gap, align }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};

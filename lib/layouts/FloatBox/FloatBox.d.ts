import { default as React } from '../../../node_modules/react';
import { smallWidthClasses, figureAlignClasses } from '../../utils/propClasses';
type smallWidthKeys = keyof typeof smallWidthClasses;
type figureAlignKeys = keyof typeof figureAlignClasses;
export interface FloatBoxProps {
    children?: React.ReactNode;
    smallWidth?: smallWidthKeys;
    float?: figureAlignKeys;
}
export declare const FloatBox: ({ children, smallWidth, float }: FloatBoxProps) => import("react/jsx-runtime").JSX.Element;
export {};

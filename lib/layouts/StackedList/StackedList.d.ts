import { default as React } from '../../../node_modules/react';

export interface StackedListProps {
    children: React.ReactNode;
    as?: 'ul' | 'div';
    cols?: '1' | '2';
    listType?: 'posts' | 'toc';
    maxWidth?: '5xl' | '7xl';
    offset?: 'left' | 'right';
    header?: string;
}
export declare const StackedList: ({ children, as, cols, listType, maxWidth, offset, header, }: StackedListProps) => import("react/jsx-runtime").JSX.Element;

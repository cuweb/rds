import React from 'react';
export interface StackedListProps {
    children: React.ReactNode;
    as?: 'ul' | 'div';
    cols?: '1' | '2';
    listType?: 'posts' | 'toc';
    maxWidth?: '5xl' | '7xl';
    offset?: 'left' | 'right';
    size?: 'sm' | 'lg';
    header?: string;
    hasBorder?: boolean;
    hasShadow?: boolean;
}
export declare const StackedList: ({ children, as, cols, listType, maxWidth, offset, size, hasBorder, hasShadow, header, }: StackedListProps) => import("react/jsx-runtime").JSX.Element;

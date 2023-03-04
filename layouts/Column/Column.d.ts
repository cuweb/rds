import React from 'react';
export interface ColumnProps {
    children: React.ReactNode;
    maxWidth?: 'none' | 'full' | '5xl' | '7xl';
    gridGap?: '0' | '5' | '10';
    cols?: '1' | '2' | '3' | '4' | '1/3' | '2/3';
}
export declare const Column: ({ children, maxWidth, gridGap, cols }: ColumnProps) => JSX.Element;
//# sourceMappingURL=Column.d.ts.map
import React from 'react';
export interface StackedListProps {
    children: React.ReactNode;
    maxWidth?: 'full' | '5xl' | '7xl';
    cols?: '1' | '2';
    header?: string;
    hasBorder?: boolean;
    hasShadow?: boolean;
}
export declare const StackedList: ({ children, maxWidth, cols, header, hasBorder, hasShadow, }: StackedListProps) => JSX.Element;
//# sourceMappingURL=StackedList.d.ts.map
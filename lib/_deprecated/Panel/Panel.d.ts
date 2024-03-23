import React from '../../../node_modules/react';
export interface PanelProps {
    children: React.ReactNode;
    maxWidth?: 'full' | '5xl' | '7xl';
    hasBorder?: boolean;
    hasShadow?: boolean;
    hasSpacing?: boolean;
}
export declare const Panel: ({ children, maxWidth, hasBorder, hasShadow, hasSpacing }: PanelProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;

import React from '../../../node_modules/react';
export interface BadgeProps {
    children?: React.ReactNode;
    color?: 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'grey';
    noWordBreak?: boolean;
}
export declare const Badge: ({ children, color, noWordBreak }: BadgeProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;

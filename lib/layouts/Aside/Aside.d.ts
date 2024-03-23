import React from '../../../node_modules/react';
export interface AsideProps {
    children: React.ReactNode;
    isSticky?: boolean;
    topSpace?: '5' | '10';
}
export declare const Aside: ({ children, isSticky, topSpace }: AsideProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;

import React from 'react';
export interface AsideProps {
    children: React.ReactNode;
    isSticky?: boolean;
    topSpace?: '5' | '10';
}
export declare const Aside: ({ children, isSticky, topSpace }: AsideProps) => import("react/jsx-runtime").JSX.Element;

import React from 'react';
type TitleTypeProps = 'h2' | 'h3';
export interface NumberCardProps {
    children?: React.ReactNode;
    title: string;
    content: string;
    isCenter?: boolean;
}
export interface TitleProps {
    as?: TitleTypeProps;
}
export declare const NumberCard: ({ title, content, isCenter }: NumberCardProps) => JSX.Element;
export {};
//# sourceMappingURL=NumberCard.d.ts.map
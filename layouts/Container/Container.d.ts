import React from 'react';
type BaseContainerTypeProps = 'section' | 'div';
export interface ContainerBaseProps {
    as?: keyof JSX.IntrinsicElements;
}
export interface ContainerProps {
    children?: React.ReactNode;
    as?: BaseContainerTypeProps;
    hasProse?: boolean;
    bgColor?: 'white' | 'grey';
    maxWidth?: 'none' | 'full' | '5xl' | '7xl';
}
export declare const Container: ({ as: Component, children, hasProse, bgColor, maxWidth, }: ContainerProps) => JSX.Element;
export {};
//# sourceMappingURL=Container.d.ts.map
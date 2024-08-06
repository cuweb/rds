import { default as React, PropsWithChildren } from '../../../node_modules/react';

export interface AlertProps {
    title: string;
    content?: React.ReactNode | string;
    type?: 'success' | 'error' | 'warning' | 'info';
    size?: 'sm' | 'md' | 'lg';
}
export declare const Alert: ({ title, content, type, size }: PropsWithChildren<AlertProps>) => import("react/jsx-runtime").JSX.Element;

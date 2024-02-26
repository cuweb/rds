import React, { PropsWithChildren } from 'react';
export interface AlertProps {
    title: string;
    content?: React.ReactNode | string;
    type: 'success' | 'error' | 'warning' | 'info';
    textSize?: 'small' | 'large';
}
export declare const Alert: ({ title, content, type, textSize }: PropsWithChildren<AlertProps>) => import("react/jsx-runtime").JSX.Element;

import React, { PropsWithChildren } from '../../../node_modules/react';
export interface AlertProps {
    title: string;
    content?: React.ReactNode | string;
    type: 'success' | 'error' | 'warning' | 'info';
    textSize?: 'small' | 'large';
}
export declare const Alert: ({ title, content, type, textSize }: PropsWithChildren<AlertProps>) => import('../../../node_modules/react/jsx-runtime').JSX.Element;

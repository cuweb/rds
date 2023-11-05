import { PropsWithChildren } from 'react';
export interface AlertProps {
    title: string;
    content?: string;
    type: 'success' | 'error' | 'warning' | 'info';
    textSize?: 'small' | 'large';
}
export declare const Alert: ({ title, content, type, textSize }: PropsWithChildren<AlertProps>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Alert.d.ts.map
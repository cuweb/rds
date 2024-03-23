import { PropsWithChildren } from '../../../node_modules/react';
export interface ToastBaseProps {
    type: 'success' | 'error' | 'warning' | 'info';
}
export declare const Toast: {
    ({ children, type }: PropsWithChildren<ToastBaseProps>): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
} & {
    Toaster: {
        ({ children }: PropsWithChildren): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Title: {
        ({ children }: PropsWithChildren): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: PropsWithChildren): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
};

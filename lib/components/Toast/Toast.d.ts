import { PropsWithChildren } from 'react';
export interface ToastBaseProps {
    type: 'success' | 'error' | 'warning' | 'info';
}
export declare const Toast: {
    ({ children, type }: PropsWithChildren<ToastBaseProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Toaster: {
        ({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Title: {
        ({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

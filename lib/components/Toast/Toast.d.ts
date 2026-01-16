import { PropsWithChildren } from '../../../node_modules/react';
export interface ToastBaseProps {
    type: 'success' | 'error' | 'warning' | 'info';
}
export declare const Toast: {
    ({ children, type }: PropsWithChildren<ToastBaseProps>): import("react/jsx-runtime").JSX.Element | null;
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

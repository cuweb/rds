import { PropsWithChildren } from 'react';
export interface ToastBaseProps {
    type: 'success' | 'error' | 'warning' | 'info';
}
export declare const Toast: {
    ({ children, type }: PropsWithChildren<ToastBaseProps>): JSX.Element;
    displayName: string;
} & {
    Toaster: {
        ({ children }: PropsWithChildren): JSX.Element;
        displayName: string;
    };
    Title: {
        ({ children }: PropsWithChildren): JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: PropsWithChildren): JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Toast.d.ts.map
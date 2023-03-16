import { PropsWithChildren } from 'react';
export interface AlertBaseProps {
    type: 'success' | 'error' | 'warning' | 'info';
}
export declare const Alert: {
    ({ children, type }: PropsWithChildren<AlertBaseProps>): JSX.Element;
    displayName: string;
} & {
    Alerter: ({ children }: PropsWithChildren) => JSX.Element;
    Title: {
        ({ children }: PropsWithChildren): JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: PropsWithChildren): JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Alert.d.ts.map
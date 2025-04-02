import { default as React } from '../../../node_modules/react';
export interface DetailsItemProps {
    children?: React.ReactNode;
    as?: 'li';
    isBold?: boolean;
    iconName?: string;
}
export declare const DetailsItem: {
    ({ children, as, isBold, iconName }: DetailsItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

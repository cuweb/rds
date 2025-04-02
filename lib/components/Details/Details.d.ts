import { default as React } from '../../../node_modules/react';
export interface DetailsProps {
    children?: React.ReactNode;
    as?: 'ul' | 'ol';
    hasDividers?: boolean;
    isGrey?: boolean;
}
export declare const DetailsWrapper: {
    ({ children, as, hasDividers, isGrey }: DetailsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Details: {
    ({ children, as, hasDividers, isGrey }: DetailsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Item: {
        ({ children, as, isBold, iconName }: import('./DetailsItem').DetailsItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

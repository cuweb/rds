import { default as React } from '../../../node_modules/react';
export interface ListingFigureProps {
    children: React.ReactNode;
    isSquare?: boolean;
    isSmall?: boolean;
    hideMobile?: boolean;
}
export declare const ListingFigure: {
    ({ children, isSquare, isSmall, hideMobile }: ListingFigureProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

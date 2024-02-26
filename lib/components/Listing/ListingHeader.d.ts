/// <reference types="react" />
export interface ListingHeaderProps {
    children: React.ReactNode;
    as?: 'h2' | 'h3';
    date?: string | Date;
}
export declare const headerStyles: {
    base: string;
    header: string;
    date: string;
};
export declare const ListingHeader: {
    ({ children, as, date }: ListingHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

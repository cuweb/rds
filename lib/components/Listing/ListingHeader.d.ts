/// <reference types="react" />
export interface ListingHeaderProps {
    children: React.ReactNode;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    datePosition?: 'top' | 'bottom';
}
export declare const ListingHeader: {
    ({ children, as, date, datePrefix, datePosition }: ListingHeaderProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};

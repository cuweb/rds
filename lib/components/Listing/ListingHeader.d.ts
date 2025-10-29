export interface ListingHeaderProps {
    title: string;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    readTime?: string;
    datePosition?: 'top' | 'bottom';
}
export declare const ListingHeader: {
    ({ title, as, date, datePrefix, readTime, datePosition, }: ListingHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

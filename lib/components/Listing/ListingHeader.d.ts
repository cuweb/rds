export interface ListingHeaderProps {
    title: string;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    datePosition?: 'top' | 'bottom';
}
export declare const ListingHeader: {
    ({ title, as, date, datePrefix, datePosition, }: ListingHeaderProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};

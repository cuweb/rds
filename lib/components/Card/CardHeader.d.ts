export interface CardHeaderProps {
    title: string;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    readTime?: string;
    datePosition?: 'top' | 'bottom';
}
export declare const CardHeader: {
    ({ title, as, date, datePrefix, readTime, datePosition, }: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

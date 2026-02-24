export interface CardHeaderProps {
    title: string;
    link?: string;
    extraText?: string;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    readTime?: string;
    datePosition?: 'top' | 'bottom';
}
export declare const CardHeader: {
    ({ title, link, extraText, as, date, datePrefix, readTime, datePosition, }: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

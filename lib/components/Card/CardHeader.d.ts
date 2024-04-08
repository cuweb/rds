export interface CardHeaderProps {
    title: string;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    datePosition?: 'top' | 'bottom';
}
export declare const CardHeader: {
    ({ title, as, date, datePrefix, datePosition, }: CardHeaderProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};

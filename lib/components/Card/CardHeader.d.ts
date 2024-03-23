/// <reference types="react" />
export interface CardHeaderProps {
    children: React.ReactNode;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    datePosition?: 'top' | 'bottom';
}
export declare const CardHeader: {
    ({ children, as, date, datePrefix, datePosition }: CardHeaderProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};

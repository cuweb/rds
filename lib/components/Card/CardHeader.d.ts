/// <reference types="react" />
export interface CardHeaderProps {
    children: React.ReactNode;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    datePosition?: 'top' | 'bottom';
}
export declare const headerStyles: {
    base: string;
    header: string;
    date: string;
};
export declare const CardHeader: {
    ({ children, as, date, datePrefix, datePosition }: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

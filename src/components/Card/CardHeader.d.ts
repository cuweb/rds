/// <reference types="react" />
export interface CardHeaderProps {
    children: React.ReactNode;
    as?: 'h2' | 'h3';
    date?: string | Date;
}
export declare const headerStyles: {
    base: string;
    header: string;
    date: string;
};
export declare const CardHeader: {
    ({ children, as, date }: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=CardHeader.d.ts.map
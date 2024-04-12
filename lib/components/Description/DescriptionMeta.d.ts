/// <reference types="react" />
export interface DescriptionMetaProps {
    term?: string;
    children: React.ReactNode;
    hasBorder?: boolean;
    useColumns?: boolean;
    isSmall?: boolean;
}
export declare const DescriptionMeta: {
    ({ term, children, hasBorder, useColumns, isSmall }: DescriptionMetaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

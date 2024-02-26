/// <reference types="react" />
export interface DescriptionMetaProps {
    term?: string;
    children: React.ReactNode;
    useColumns?: boolean;
}
export declare const DescriptionMeta: {
    ({ term, children, useColumns }: DescriptionMetaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

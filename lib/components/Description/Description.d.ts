export interface DescriptionProps {
    children: React.ReactNode;
}
export declare const DescriptionWrapper: {
    ({ children }: DescriptionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Description: {
    ({ children }: DescriptionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Accordion: {
        ({ term, children }: import('./DescriptionAccordion').DescriptionAccordionProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Meta: {
        ({ term, children, useColumns }: import('./DescriptionMeta').DescriptionMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

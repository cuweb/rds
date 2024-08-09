export interface DescriptionLoader {
    children: React.ReactNode;
}
export declare const DescriptionLoaderWrapper: ({ children }: DescriptionLoader) => import("react/jsx-runtime").JSX.Element;
export declare const DescriptionLoader: (({ children }: DescriptionLoader) => import("react/jsx-runtime").JSX.Element) & {
    Accordion: {
        ({ rows }: import('./DescriptionLoaderAccordion').DescriptionLoaderAccordionProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Meta: {
        ({ rows, useColumns }: import('./DescriptionLoaderMeta').DescriptionLoaderMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

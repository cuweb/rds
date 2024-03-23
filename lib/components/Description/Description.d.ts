/// <reference types="react" />
export interface DescriptionProps {
    children: React.ReactNode;
}
export declare const DescriptionWrapper: ({ children }: DescriptionProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const Description: (({ children }: DescriptionProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element) & {
    Accordion: {
        ({ term, children }: import("./DescriptionAccordion").DescriptionAccordionProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Meta: {
        ({ term, children, useColumns }: import("./DescriptionMeta").DescriptionMetaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
};

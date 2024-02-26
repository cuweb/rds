/// <reference types="react" />
export interface CardPeopleMetaProps {
    children: React.ReactNode;
    jobTitle?: string;
    phone?: string;
}
export declare const styles: {
    list: string;
    font: string;
    bold: string;
};
export declare const CardPeopleMeta: {
    ({ jobTitle, children, phone }: CardPeopleMetaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

/// <reference types="react" />
export interface ListingPeopleMetaProps {
    children?: React.ReactNode;
    jobTitle?: string;
    phone?: string;
}
export declare const ListingPeopleMeta: {
    ({ jobTitle, children, phone }: ListingPeopleMetaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

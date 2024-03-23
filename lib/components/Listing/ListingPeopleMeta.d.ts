/// <reference types="react" />
export interface ListingPeopleMetaProps {
    children?: React.ReactNode;
    jobTitle?: string;
    phone?: string;
}
export declare const ListingPeopleMeta: {
    ({ jobTitle, children, phone }: ListingPeopleMetaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};

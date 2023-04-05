import React from 'react';
type PeopleItemTypeProps = 'li' | 'div';
export interface PeopleItemProps {
    as?: PeopleItemTypeProps;
    children?: React.ReactNode;
    firstName: string;
    lastName: string;
    jobTitle?: string;
    email?: string;
    phoneNumber?: string;
    tags?: Tags;
    profileImage?: string;
    link?: string;
    alt?: string;
    noImage?: boolean;
}
interface Tags {
    category: {
        id: number;
        name: string;
        slug: string;
    }[];
}
export declare const PeopleItem: ({ as: Component, firstName, lastName, email, phoneNumber, tags, jobTitle, profileImage, alt, link, noImage, }: PeopleItemProps) => JSX.Element;
export {};
//# sourceMappingURL=PeopleItem.d.ts.map
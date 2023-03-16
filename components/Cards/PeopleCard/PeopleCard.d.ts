export interface PeopleCardProps {
    firstName: string;
    lastName: string;
    jobTitle?: string;
    email: string;
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
export declare const PeopleCard: ({ firstName, lastName, email, phoneNumber, tags, jobTitle, profileImage, link, alt, noImage, }: PeopleCardProps) => JSX.Element;
export {};
//# sourceMappingURL=PeopleCard.d.ts.map
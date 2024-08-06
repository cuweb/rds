export declare const PeopleDataSingle: {
    id: number;
    firstName: string;
    lastName: string;
    link: string;
    image: string;
    alt: string;
    jobTitle: string;
    email: string;
    phone: string;
    phoneExt: string;
    tags: {
        category: {
            id: number;
            name: string;
            slug: string;
        }[];
    };
};
export declare const PeopleData: ({
    id: number;
    firstName: string;
    lastName: string;
    link: string;
    image: string;
    alt: string;
    jobTitle: string;
    email: string;
    phone: string;
    phoneExt: string;
    tags: {
        category: {
            id: number;
            name: string;
            slug: string;
        }[];
    };
} | {
    id: number;
    firstName: string;
    lastName: string;
    link: string;
    image: string;
    alt: string;
    email: string;
    phone: string;
    phoneExt: string;
    tags: {
        category: {
            id: number;
            name: string;
            slug: string;
        }[];
    };
    jobTitle?: undefined;
})[];

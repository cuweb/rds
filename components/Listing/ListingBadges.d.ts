export interface ListingBadgesProps {
    tags?: Tags;
}
interface Tags {
    category: {
        id: number;
        name: string;
        slug: string;
    }[];
    audience?: {
        id: number;
        name: string;
        slug: string;
    }[];
}
export declare const ListingBadges: {
    ({ tags }: ListingBadgesProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=ListingBadges.d.ts.map
export interface ListingBadgesProps {
    tags?: Tags;
}
interface Tags {
    category: {
        id: number;
        name: string;
        slug: string;
    }[];
}
export declare const ListingBadges: {
    ({ tags }: ListingBadgesProps): JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=ListingBadges.d.ts.map
export interface CardBadgesProps {
    tags?: Tags;
}
interface Tags {
    category: {
        id: number;
        name: string;
        slug: string;
    }[];
}
export declare const CardBadges: {
    ({ tags }: CardBadgesProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=CardBadges.d.ts.map
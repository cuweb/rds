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
export declare const CardBadges: ({ tags }: CardBadgesProps) => JSX.Element;
export {};
//# sourceMappingURL=CardBadges.d.ts.map
interface Tags {
    category: {
        id: number;
        name: string;
        slug: string;
    }[];
}
export interface VideoCardProps {
    source: any;
    tags?: Tags;
}
export declare function VideoCard({ source, tags }: VideoCardProps): JSX.Element;
export {};
//# sourceMappingURL=VideoCard.d.ts.map
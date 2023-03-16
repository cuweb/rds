export interface VideoCardProps {
    source: string;
    tags?: Tags;
}
interface Tags {
    category: {
        id: number;
        name: string;
        slug: string;
    }[];
}
export declare function VideoCard({ source, tags }: VideoCardProps): JSX.Element;
export {};
//# sourceMappingURL=VideoCard.d.ts.map
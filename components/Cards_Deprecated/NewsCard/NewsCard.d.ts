import { PropsWithChildren } from 'react';
export interface NewsCardProps {
    id?: number;
    title: string;
    heading?: 'h2' | 'h3';
    link: string;
    date?: string | Date;
    image?: string;
    alt?: string;
    excerpt?: string;
    tags?: Tags;
}
interface Tags {
    category: {
        id: number;
        name: string;
        slug: string;
    }[];
}
export declare const NewsCard: ({ title, heading: HeadLevel, link, date, image, alt, excerpt, tags, }: PropsWithChildren<NewsCardProps>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=NewsCard.d.ts.map
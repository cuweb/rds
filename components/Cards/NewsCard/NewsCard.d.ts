import React from 'react';
export interface NewsCardProps {
    children?: React.ReactNode;
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
export declare const NewsCard: ({ title, heading: HeadLevel, link, date, image, alt, excerpt, tags, }: NewsCardProps) => JSX.Element;
export {};
//# sourceMappingURL=NewsCard.d.ts.map
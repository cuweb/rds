import React from 'react';
type NewsItemTypeProps = 'li' | 'div';
export interface NewsItemProps {
    as?: NewsItemTypeProps;
    children?: React.ReactNode;
    title: string;
    link?: string;
    image?: string;
    alt?: string;
    date?: string | Date;
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
export declare const NewsItem: ({ as: Component, title, link, image, alt, date, excerpt, tags }: NewsItemProps) => JSX.Element;
export {};
//# sourceMappingURL=NewsItem.d.ts.map
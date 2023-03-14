import React from 'react';
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';
interface Tags {
    category: {
        id: number;
        name: string;
        slug: string;
    }[];
    audience: {
        id: number;
        name: string;
        slug: string;
    }[];
}
export interface EventItemProps {
    children?: React.ReactNode;
    fontSize?: 'base' | 'lg' | 'xl';
    title?: string;
    link?: string;
    startDateTime?: string;
    endDateTime?: string;
    featuredImage?: string;
    description?: string;
    on_campus?: boolean;
    on_campus_building?: string | null;
    on_campus_room_number?: string | null;
    event_address?: string;
    tags?: Tags;
}
export interface ItemBaseProps {
    as?: keyof JSX.IntrinsicElements;
}
export interface BaseItemProps {
    as?: BaseItemTypeProps;
}
export interface TitleProps {
    as?: TitleTypeProps;
}
export declare const EventItem: ({ as: Component, link, title, startDateTime, endDateTime, featuredImage, on_campus, on_campus_building, on_campus_room_number, event_address, tags, }: ItemBaseProps & EventItemProps) => JSX.Element;
export {};
//# sourceMappingURL=EventItem.d.ts.map
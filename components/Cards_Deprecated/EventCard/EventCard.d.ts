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
export interface EventCardProps {
    title?: string;
    heading?: 'h2' | 'h3';
    link: string;
    startDateTime: string;
    endDateTime: string;
    featuredImage?: string;
    description?: string;
    onCampus: boolean;
    onCampusBuilding?: string | null;
    onCampusRoomNumber?: string | null;
    eventAddress?: string;
    tags?: Tags;
}
export declare const EventCard: ({ title, heading: HeadLevel, link, startDateTime, endDateTime, featuredImage, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, tags, }: EventCardProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=EventCard.d.ts.map
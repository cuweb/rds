export declare const EventDataSingle: {
    id: number;
    title: string;
    link: string;
    startDate: string;
    endDate: string;
    event_address: string;
    on_campus: boolean;
    on_campus_building: string;
    on_campus_room_number: string;
    image: string;
    alt: string;
    tags: {
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
    };
    multiday: boolean;
};
export declare const EventData: ({
    id: number;
    title: string;
    link: string;
    startDate: string;
    endDate: string;
    event_address: string;
    on_campus: boolean;
    on_campus_building: string;
    on_campus_room_number: string;
    image: string;
    alt: string;
    tags: {
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
    };
    multiday: boolean;
} | {
    id: number;
    title: string;
    link: string;
    startDate: string;
    endDate: string;
    event_address: string;
    on_campus: boolean;
    on_campus_building: null;
    on_campus_room_number: null;
    image: string;
    alt: string;
    tags: {
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
    };
    multiday: boolean;
})[];
export declare const EventDetailsData: {
    title: string;
    description: string;
}[];

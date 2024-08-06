export interface PageHeadersEventProps {
    children?: React.ReactNode;
    startDate?: string;
    endDate?: string;
    eventType: 'In-Person' | 'Virtual' | 'Hybrid';
    location?: string;
    virtualType?: 'Teams' | 'Zoom';
    virtualUrl?: string;
    cost?: string;
    contactName?: string;
    contactPhone?: string;
    contactEmail?: string;
}
export declare const PageHeadersEvent: {
    ({ children, startDate, endDate, eventType, location, virtualType, virtualUrl, cost, contactName, contactPhone, contactEmail, }: PageHeadersEventProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

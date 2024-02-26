export interface HeroTextImageEventProps {
    designation?: string;
    title: string;
    startDate?: string;
    endDate?: string;
    eventType: 'In-Person' | 'Virtual' | 'Hybrid';
    location?: string;
    virtualType?: 'Teams' | 'Zoom';
    virtualUrl?: string;
    primaryButtonUrl?: string;
    primaryButtonText?: string;
    secondaryButtonUrl?: string;
    secondaryButtonText?: string;
    cost?: string;
    contactName?: string;
    contactPhone?: string;
    contactEmail?: string;
}
export declare const HeroTextImageEvent: {
    ({ title, startDate, endDate, eventType, location, virtualType, virtualUrl, cost, contactName, contactPhone, contactEmail, primaryButtonUrl, primaryButtonText, secondaryButtonUrl, secondaryButtonText, }: HeroTextImageEventProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

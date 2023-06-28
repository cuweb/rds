import React from 'react';
export interface HeroTextImageEventProps {
    children?: React.ReactNode;
    designation?: string;
    title: string;
    startDate?: string;
    endDate?: string;
    location?: string;
    cost?: string;
    contactName?: string;
    contactPhone?: string;
    contactEmail?: string;
}
export declare const eventContact: string[];
export declare const HeroTextImageEvent: {
    ({ children, title, startDate, endDate, location, cost, ...eventContact }: HeroTextImageEventProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=HeroTextImageEvent.d.ts.map
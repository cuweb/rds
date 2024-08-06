import { default as React } from '../../../node_modules/react';

export interface ListingProps {
    children: React.ReactNode;
}
export declare const ListingWrapper: {
    ({ children }: ListingProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Listing: {
    ({ children }: ListingProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Figure: {
        ({ children, isSquare }: import('./ListingFigure').ListingFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children }: import('./ListingBody').ListingBodyProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Header: {
        ({ title, as, date, datePrefix, datePosition, }: import('./ListingHeader').ListingHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text, hasMore }: import('./ListingExcerpt').ListingExcerptProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    DateThumb: {
        ({ startDate, endDate }: import('./ListingDateThumb').ListingDateThumbProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    IconThumb: {
        ({ icon, assetPath, }: import('./ListingIconThumb').ListingIconThumbProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Initials: {
        ({ initials }: import('./ListingInitials').ListingInitialsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import('./ListingEventMeta').ListingEventMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, children, phone }: import('./ListingPeopleMeta').ListingPeopleMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children }: import('./ListingFooter').ListingFooterProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

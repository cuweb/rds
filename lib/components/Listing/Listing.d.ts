import React from 'react';
export interface ListingProps {
    children: React.ReactNode;
    useArrow?: boolean;
}
export declare const ListingWrapper: ({ children, useArrow }: ListingProps) => import("react/jsx-runtime").JSX.Element;
export declare const Listing: (({ children, useArrow }: ListingProps) => import("react/jsx-runtime").JSX.Element) & {
    Figure: {
        ({ children, isSquare }: import("./ListingFigure").ListingFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children }: import("./ListingBody").ListingBodyProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Header: {
        ({ children, as, date }: import("./ListingHeader").ListingHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text, hasMore }: import("./ListingExcerpt").ListingExcerptProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    DateThumb: {
        ({ startDate, endDate }: import("./ListingDateThumb").ListingDateThumbProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    IconThumb: {
        ({ icon, bgType, hasShadow }: import("./ListingIconThumb").ListingIconThumbProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Initials: {
        ({ initials }: import("./ListingInitials").ListingInitialsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import("./ListingEventMeta").ListingEventMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, children, phone }: import("./ListingPeopleMeta").ListingPeopleMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children, isType, buttonType, buttonStyle }: import("./ListingFooter").ListingFooterProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

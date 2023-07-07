import React from 'react';
export interface ListingProps {
    children: React.ReactNode;
    noLink?: boolean;
}
export declare const ListingWrapper: ({ children, noLink }: ListingProps) => import("react/jsx-runtime").JSX.Element;
export declare const Listing: (({ children, noLink }: ListingProps) => import("react/jsx-runtime").JSX.Element) & {
    Figure: {
        ({ children, size }: import("./ListingFigure").ListingFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children, isSmall }: import("./ListingContent").ListingContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    DateBox: {
        ({ startDate, endDate }: import("./ListingDateBox").ListingDateBoxProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Header: {
        ({ text }: import("./ListingHeader").ListingHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text }: import("./ListingExcerpt").ListingExcerptProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Badges: {
        ({ tags }: import("./ListingBadges").ListingBadgesProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    PostMeta: {
        ({ date }: import("./ListingPostMeta").ListingPostMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import("./ListingEventMeta").ListingEventMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, email, phone }: import("./ListingPeopleMeta").ListingPeopleMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Initials: {
        ({ initials }: import("./ListingInitials").ListingInitialsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Listing.d.ts.map
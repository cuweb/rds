import React from 'react';
export interface ListingProps {
    children: React.ReactNode;
    noLink?: boolean;
}
export declare const ListingWrapper: ({ children, noLink }: ListingProps) => JSX.Element;
export declare const Listing: (({ children, noLink }: ListingProps) => JSX.Element) & {
    Figure: {
        ({ children, size }: import("./ListingFigure").ListingFigureProps): JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: import("./ListingContent").ListingContentProps): JSX.Element;
        displayName: string;
    };
    DateBox: {
        ({ startDate }: import("./ListingDateBox").ListingDateBoxProps): JSX.Element;
        displayName: string;
    };
    Header: {
        ({ text, isSmall }: import("./ListingHeader").ListingHeaderProps): JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text }: import("./ListingExcerpt").ListingExcerptProps): JSX.Element;
        displayName: string;
    };
    Badges: {
        ({ tags }: import("./ListingBadges").ListingBadgesProps): JSX.Element;
        displayName: string;
    };
    PostMeta: {
        ({ date }: import("./ListingPostMeta").ListingPostMetaProps): JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import("./ListingEventMeta").ListingEventMetaProps): JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, email, phone }: import("./ListingPeopleMeta").ListingPeopleMetaProps): JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Listing.d.ts.map
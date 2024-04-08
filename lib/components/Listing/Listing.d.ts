import React from '../../../node_modules/react';
export interface ListingProps {
    children: React.ReactNode;
}
export declare const ListingWrapper: ({ children }: ListingProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const Listing: (({ children }: ListingProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element) & {
    Figure: {
        ({ children, isSquare }: import("./ListingFigure").ListingFigureProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children }: import("./ListingBody").ListingBodyProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Header: {
        ({ title, as, date, datePrefix, datePosition, }: import("./ListingHeader").ListingHeaderProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text, hasMore }: import("./ListingExcerpt").ListingExcerptProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    DateThumb: {
        ({ startDate, endDate }: import("./ListingDateThumb").ListingDateThumbProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    IconThumb: {
        ({ icon }: import("./ListingIconThumb").ListingIconThumbProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Initials: {
        ({ initials }: import("./ListingInitials").ListingInitialsProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import("./ListingEventMeta").ListingEventMetaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, children, phone }: import("./ListingPeopleMeta").ListingPeopleMetaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children }: import("./ListingFooter").ListingFooterProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
};

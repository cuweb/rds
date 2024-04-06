import React from '../../../node_modules/react';
export interface CardProps {
    children: React.ReactNode;
    isCenter?: boolean;
    noHover?: boolean;
    leftBorder?: boolean;
}
export declare const CardWrapper: ({ children, isCenter, noHover, leftBorder }: CardProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const Card: (({ children, isCenter, noHover, leftBorder }: CardProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element) & {
    Figure: {
        ({ children, isRound }: import("./CardFigure").CardFigureProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    DateThumb: {
        ({ as, startDate, endDate }: import("./CardDateThumb").CardDateThumbProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    IconThumb: {
        ({ icon }: import("./CardIconThumb").CardIconThumbProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    ImageThumb: {
        ({ children, isSquare }: import("./CardImageThumb").CardImageThumbProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Initials: {
        ({ initials }: import("./CardInitials").CardInitialsProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Video: {
        ({ source }: import("./CardVideo").CardVideoProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Header: {
        ({ children, as, date, datePrefix, datePosition }: import("./CardHeader").CardHeaderProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children }: import("./CardBody").CardBodyProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children }: import("./CardFooter").CardFooterProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text, hasMore }: import("./CardExcerpt").CardExcerptProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import("./CardEventMeta").CardEventMetaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, children, phone }: import("./CardPeopleMeta").CardPeopleMetaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Stats: {
        ({ stat, desc, reverse }: import("./CardStats").CardStatsProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
};

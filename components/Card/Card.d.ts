import React from 'react';
export interface CardProps {
    children: React.ReactNode;
    isCenter?: boolean;
    noLink?: boolean;
    border?: 'red' | 'grey' | 'dark-grey' | 'green' | 'yellow';
}
export declare const CardWrapper: ({ children, isCenter, border, noLink }: CardProps) => JSX.Element;
export declare const Card: (({ children, isCenter, border, noLink }: CardProps) => JSX.Element) & {
    Figure: {
        ({ children, isRound }: import("./CardFigure").CardFigureProps): JSX.Element;
        displayName: string;
    };
    Video: {
        ({ source }: import("./CardVideo").CardVideoProps): JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: import("./CardContent").CardContentProps): JSX.Element;
        displayName: string;
    };
    DateBox: {
        ({ startDate }: import("./CardDateBox").CardDateBoxProps): JSX.Element;
        displayName: string;
    };
    Header: {
        ({ text }: import("./CardHeader").CardHeaderProps): JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text }: import("./CardExcerpt").CardExcerptProps): JSX.Element;
        displayName: string;
    };
    Badges: {
        ({ tags }: import("./CardBadges").CardBadgesProps): JSX.Element;
        displayName: string;
    };
    PostMeta: {
        ({ date }: import("./CardPostMeta").CardPostMetaProps): JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import("./CardEventMeta").CardEventMetaProps): JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, email, phone }: import("./CardPeopleMeta").CardPeopleMetaProps): JSX.Element;
        displayName: string;
    };
    Stats: {
        ({ stat, desc }: import("./CardStats").CardStatsProps): JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Card.d.ts.map
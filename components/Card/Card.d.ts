import React from 'react';
export interface CardProps {
    children: React.ReactNode;
    isCenter?: boolean;
    noLink?: boolean;
    border?: 'red' | 'grey' | 'dark-grey' | 'green' | 'yellow';
}
export declare const CardWrapper: ({ children, isCenter, border, noLink }: CardProps) => import("react/jsx-runtime").JSX.Element;
export declare const Card: (({ children, isCenter, border, noLink }: CardProps) => import("react/jsx-runtime").JSX.Element) & {
    Figure: {
        ({ children, isRound }: import("./CardFigure").CardFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Video: {
        ({ source }: import("./CardVideo").CardVideoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: import("./CardContent").CardContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    DateBox: {
        ({ startDate }: import("./CardDateBox").CardDateBoxProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Header: {
        ({ text }: import("./CardHeader").CardHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text }: import("./CardExcerpt").CardExcerptProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Badges: {
        ({ tags }: import("./CardBadges").CardBadgesProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    PostMeta: {
        ({ date }: import("./CardPostMeta").CardPostMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import("./CardEventMeta").CardEventMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, email, phone }: import("./CardPeopleMeta").CardPeopleMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Stats: {
        ({ stat, desc, reverse }: import("./CardStats").CardStatsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Card.d.ts.map
import React from 'react';
export interface CardProps {
    children: React.ReactNode;
    isCenter?: boolean;
}
export declare const CardWrapper: ({ children, isCenter }: CardProps) => JSX.Element;
export declare const Card: (({ children, isCenter }: CardProps) => JSX.Element) & {
    Figure: ({ children, isRound }: import("./CardFigure").CardFigureProps) => JSX.Element;
    Video: ({ source }: import("./CardVideo").CardVideoProps) => JSX.Element;
    Content: ({ children }: import("./CardContent").CardContentProps) => JSX.Element;
    DateBox: ({ startDate }: import("./CardDateBox").CardDateBoxProps) => JSX.Element;
    Header: ({ text }: import("./CardHeader").CardHeaderProps) => JSX.Element;
    Excerpt: ({ text }: import("./CardExcerpt").CardExcerptProps) => JSX.Element;
    Badges: ({ tags }: import("./CardBadges").CardBadgesProps) => JSX.Element;
    PostMeta: ({ date }: import("./CardPostMeta").CardPostMetaProps) => JSX.Element;
    EventMeta: ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import("./CardEventMeta").CardEventMetaProps) => JSX.Element;
    PeopleMeta: ({ jobTitle, email, phone }: import("./CardPeopleMeta").CardPeopleMetaProps) => JSX.Element;
};
//# sourceMappingURL=Card.d.ts.map
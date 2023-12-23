import React from 'react';
export interface CardProps {
    children: React.ReactNode;
    isCenter?: boolean;
    noLink?: boolean;
    hasShadow?: 'onCard' | 'onHover';
    isGrey?: boolean;
    hasRedBorder?: boolean;
}
export declare const CardWrapper: ({ children, isCenter, noLink, hasShadow, hasRedBorder, isGrey }: CardProps) => import("react/jsx-runtime").JSX.Element;
export declare const Card: (({ children, isCenter, noLink, hasShadow, hasRedBorder, isGrey }: CardProps) => import("react/jsx-runtime").JSX.Element) & {
    Figure: {
        ({ children, isRound }: import("./CardFigure").CardFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    DateBox: {
        ({ startDate, endDate }: import("./CardDateBox").CardDateBoxProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    IconBox: {
        ({ icon }: import("./CardIconBox").CardIconBoxProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Video: {
        ({ source }: import("./CardVideo").CardVideoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Header: {
        ({ children, as, date }: import("./CardHeader").CardHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children }: import("./CardBody").CardBodyProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children, isType, buttonType, buttonStyle }: import("./CardFooter").CardFooterProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text, hasMore }: import("./CardExcerpt").CardExcerptProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import("./CardEventMeta").CardEventMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, children, phone }: import("./CardPeopleMeta").CardPeopleMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Stats: {
        ({ stat, desc, reverse }: import("./CardStats").CardStatsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Card.d.ts.map
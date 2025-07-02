import { default as React } from '../../../node_modules/react';
export interface CardProps {
    children: React.ReactNode;
    isGrey?: boolean;
    hasWave?: boolean;
    isCenter?: boolean;
    isCenterDesktop?: boolean;
    noHover?: boolean;
    leftBorder?: boolean;
    isDark?: boolean;
}
export declare const CardWrapper: {
    ({ children, isGrey, hasWave, isCenterDesktop, isCenter, noHover, leftBorder, isDark, }: CardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Card: {
    ({ children, isGrey, hasWave, isCenterDesktop, isCenter, noHover, leftBorder, isDark, }: CardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Figure: {
        ({ children, isRound }: import('./CardFigure').CardFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    DateThumb: {
        ({ as, startDate, endDate }: import('./CardDateThumb').CardDateThumbProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    IconThumb: {
        ({ icon }: import('./CardIconThumb').CardIconThumbProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    ImageThumb: {
        ({ children, isSquare }: import('./CardImageThumb').CardImageThumbProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Initials: {
        ({ initials }: import('./CardInitials').CardInitialsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Video: {
        ({ source }: import('./CardVideo').CardVideoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Header: {
        ({ title, as, date, datePrefix, datePosition, }: import('./CardHeader').CardHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children }: import('./CardBody').CardBodyProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children }: import('./CardFooter').CardFooterProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text, hasMore, truncateOnMobile }: import('./CardExcerpt').CardExcerptProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import('./CardEventMeta').CardEventMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, children, phone }: import('./CardPeopleMeta').CardPeopleMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Stats: {
        ({ stat, desc, reverse }: import('./CardStats').CardStatsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

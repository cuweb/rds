import React from '../../../node_modules/react';
export interface HeroTextImageProps {
    children?: React.ReactNode;
    maxWidth?: 'full' | '5xl' | '7xl';
    hasBorder?: boolean;
    reverse?: boolean;
}
export declare const HeroTextImageWrapper: ({ children, maxWidth, hasBorder, reverse }: HeroTextImageProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const HeroTextImage: (({ children, maxWidth, hasBorder, reverse }: HeroTextImageProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element) & {
    Content: {
        ({ children, title, paragraph, headerType, isCenter, hasMediaCol, }: import("./HeroTextImageContent").HeroTextImageContentProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Event: {
        ({ title, startDate, endDate, eventType, location, virtualType, virtualUrl, cost, contactName, contactPhone, contactEmail, primaryButtonUrl, primaryButtonText, secondaryButtonUrl, secondaryButtonText, }: import("./HeroTextImageEvent").HeroTextImageEventProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    People: {
        ({ children, designation, title, jobTitle, pronoun, ...contactInfo }: import("./HeroTextImagePeople").HeroTextImagePeopleProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Social: {
        ({ resume, linkedin, twitter, facebook }: import("./HeroTextImageSocial").HeroTextImageSocialProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Media: {
        ({ children, image, angle, focalPointX, focalPointY, hasMobileImage, }: import("./HeroTextImageMedia").HeroTextImageMediaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
};

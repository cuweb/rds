import React from 'react';
export interface HeroTextImageProps {
    children?: React.ReactNode;
    maxWidth?: 'full' | '5xl' | '7xl';
    hasBorder?: boolean;
    reverse?: boolean;
}
export declare const HeroTextImageWrapper: ({ children, maxWidth, hasBorder, reverse }: HeroTextImageProps) => import("react/jsx-runtime").JSX.Element;
export declare const HeroTextImage: (({ children, maxWidth, hasBorder, reverse }: HeroTextImageProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children, title, paragraph, headerType, hasMediaCol, }: import("./HeroTextImageContent").HeroTextImageContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Event: {
        ({ children, title, startDate, endDate, location, cost, }: import("./HeroTextImageEvent").HeroTextImageEventProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    People: {
        ({ children, designation, title, jobTitle, pronoun, degrees, building, room, email, phone, phoneExt, }: import("./HeroTextImagePeople").HeroTextImagePeopleProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Social: {
        ({ resume, linkedin, twitter, facebook }: import("./HeroTextImageSocial").HeroTextImageSocialProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Media: {
        ({ children, image, imageWidth, angle, focalPointX, focalPointY, }: import("./HeroTextImageMedia").HeroTextImageMediaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=HeroTextImage.d.ts.map
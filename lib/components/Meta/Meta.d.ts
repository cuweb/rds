import { PropsWithChildren } from 'react';
export interface MetaProps {
    description?: string;
}
export interface IconsProps {
    path?: string;
}
export interface SocialProps {
    social?: string;
    card?: string;
    title?: string;
    image?: string;
    type?: string;
    locale?: string;
    description?: string;
}
export declare const Meta: {
    ({ description, children }: PropsWithChildren<MetaProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Icons: {
        ({ path }: IconsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Social: {
        ({ type, locale, card, title, image, description }: SocialProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

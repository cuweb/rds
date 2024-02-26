import React from 'react';
export interface EmbedProps {
    children: React.ReactNode;
    maxWidth?: 'full' | '5xl' | '7xl';
}
export declare const EmbedWrapper: ({ children, maxWidth }: EmbedProps) => import("react/jsx-runtime").JSX.Element;
export declare const Embed: (({ children, maxWidth }: EmbedProps) => import("react/jsx-runtime").JSX.Element) & {
    PowerBi: {
        ({ title, url }: import("./Embed.PowerBi").EmbedPowerBiProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Kaltura: {
        ({ title, url }: import("./Embed.Kaltura").EmbedKalturaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    YouTube: {
        ({ title, url }: import("./Embed.YouTube").EmbedYouTubeProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    TED: {
        ({ title, url }: import("./Embed.TED").EmbedTEDProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Vimeo: {
        ({ title, url }: import("./Embed.Vimeo").EmbedVimeoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

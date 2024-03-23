import React from '../../../node_modules/react';
export interface EmbedProps {
    children: React.ReactNode;
    maxWidth?: 'full' | '5xl' | '7xl';
}
export declare const EmbedWrapper: ({ children, maxWidth }: EmbedProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const Embed: (({ children, maxWidth }: EmbedProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element) & {
    PowerBi: {
        ({ title, url }: import("./Embed.PowerBi").EmbedPowerBiProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Kaltura: {
        ({ title, url }: import("./Embed.Kaltura").EmbedKalturaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    YouTube: {
        ({ title, url }: import("./Embed.YouTube").EmbedYouTubeProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    TED: {
        ({ title, url }: import("./Embed.TED").EmbedTEDProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
    Vimeo: {
        ({ title, url }: import("./Embed.Vimeo").EmbedVimeoProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
        displayName: string;
    };
};

import { default as React } from '../../../node_modules/react';
export interface EmbedProps {
    children: React.ReactNode;
    isRounded?: boolean;
}
export declare const EmbedWrapper: {
    ({ children, isRounded }: EmbedProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Embed: {
    ({ children, isRounded }: EmbedProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    PowerBi: {
        ({ title, url }: import('./Embed.PowerBi').EmbedPowerBiProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Kaltura: {
        ({ title, url }: import('./Embed.Kaltura').EmbedKalturaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    SoundCloud: {
        ({ title, url }: import('./Embed.SoundCloud').EmbedSoundCloudProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    YouTube: {
        ({ title, url }: import('./Embed.YouTube').EmbedYouTubeProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    TED: {
        ({ title, url }: import('./Embed.TED').EmbedTEDProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Vimeo: {
        ({ title, url }: import('./Embed.Vimeo').EmbedVimeoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    HubSpot: {
        ({ title, url }: import('./Embed.HubSpot').EmbedHubSpotProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

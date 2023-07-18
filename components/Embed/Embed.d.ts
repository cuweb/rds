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
};
//# sourceMappingURL=Embed.d.ts.map
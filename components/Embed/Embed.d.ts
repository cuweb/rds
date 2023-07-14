import React from 'react';
export interface EmbedProps {
    children: React.ReactNode;
}
export declare const EmbedWrapper: ({ children }: EmbedProps) => import("react/jsx-runtime").JSX.Element;
export declare const Embed: (({ children }: EmbedProps) => import("react/jsx-runtime").JSX.Element) & {
    PowerBi: {
        ({ title, url }: import("./Embed.PowerBi").EmbedPowerBiProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Embed.d.ts.map
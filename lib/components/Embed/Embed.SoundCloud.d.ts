export interface EmbedSoundCloudProps {
    title: string;
    url: string;
    width?: string;
    autoPlay?: boolean;
    hideRelated?: boolean;
    showComments?: boolean;
    showUser?: boolean;
    showReposts?: boolean;
    color?: string;
}
export declare const EmbedSoundCloud: {
    ({ title, url }: EmbedSoundCloudProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

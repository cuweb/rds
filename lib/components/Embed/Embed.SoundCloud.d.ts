export interface EmbedSoundCloudProps {
    title: string;
    width?: string;
    height?: string;
    url: string;
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

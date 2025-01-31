import { videos } from './video-names-list';
type VideoNameKeys = (typeof videos)[number]['name'];
export interface FullBannerVideoProps {
    videoName?: VideoNameKeys;
}
export declare const FullBannerVideo: {
    ({ videoName }: FullBannerVideoProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

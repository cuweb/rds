import { videos, splashVideos } from './video/video-names-list';
type VideoNameKeys = (typeof videos)[number]['name'] | (typeof splashVideos)[number]['name'];
export interface VideoBannerProps {
    videoName?: VideoNameKeys;
    videoType?: 'banner' | 'splash';
    showPlayPauseButton?: boolean;
}
export declare const VideoBanner: ({ videoName, videoType, showPlayPauseButton, }: VideoBannerProps) => import("react/jsx-runtime").JSX.Element;
export {};

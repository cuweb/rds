import { videoBanner, videoSplash } from '../utils/json-lists.js';
export interface VideoBannerItem {
    title: string;
    name: string;
    description: string;
    [key: string]: unknown;
}
type VideoNameKeys = (typeof videoBanner)[number]['name'] | (typeof videoSplash)[number]['name'];
export interface VideoBannerProps {
    videoName?: VideoNameKeys;
    videoType?: 'banner' | 'splash';
    showPlayPauseButton?: boolean;
    videoBannerList?: VideoBannerItem[];
}
export declare const VideoBanner: ({ videoName, videoType, showPlayPauseButton, }: VideoBannerProps) => import("react/jsx-runtime").JSX.Element;
export {};

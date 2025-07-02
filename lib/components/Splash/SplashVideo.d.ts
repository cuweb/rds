import { splashVideos } from './../../hooks/video/video-names-list';
export interface SplashVideoProps {
    backgroundVideoName?: (typeof splashVideos)[number]['name'];
}
export declare const SplashVideo: {
    ({ backgroundVideoName }: SplashVideoProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

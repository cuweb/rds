import { videoSplash } from '../../utils/json-lists.js';
export interface SplashVideoProps {
    backgroundVideoName?: (typeof videoSplash)[number]['name'];
}
export declare const SplashVideo: {
    ({ backgroundVideoName }: SplashVideoProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

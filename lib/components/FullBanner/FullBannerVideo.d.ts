import { videos } from './../../hooks/video/video-names-list';
type VideoNameKeys = (typeof videos)[number]['name'];
export interface FullBannerVideoProps {
    videoName?: VideoNameKeys;
}
export declare const FullBannerVideo: React.FC<FullBannerVideoProps>;
export {};

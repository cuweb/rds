import { videoBanner } from '../../utils/json-lists.js';
type VideoNameKeys = (typeof videoBanner)[number]['name'];
export interface FullBannerVideoProps {
    videoName?: VideoNameKeys;
}
export declare const FullBannerVideo: React.FC<FullBannerVideoProps>;
export {};

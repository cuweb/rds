declare const videos: readonly [{
    readonly name: "cu-flyby";
    readonly description: "A flyby video of campus with scenic views of buildings and greenery.";
}, {
    readonly name: "timelapse-quad";
    readonly description: "A timelapse of the main quad showing students and campus life.";
}];
type VideoNameKeys = (typeof videos)[number]['name'];
export interface FullBannerVideoProps {
    videoName?: VideoNameKeys;
}
export declare const FullBannerVideo: {
    ({ videoName }: FullBannerVideoProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

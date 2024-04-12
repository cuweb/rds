export interface LocationProps {
    lat?: string;
    lng?: string;
    location?: string;
    zoom?: number;
    markers?: any;
    center?: any;
    singleMarker?: boolean;
}
export declare const Location: ({ markers, location, lat, lng, zoom, center }: LocationProps) => import("react/jsx-runtime").JSX.Element;

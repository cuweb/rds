export interface LocationPickerProps {
    posCallback?: (pos: {
        name: string;
        id: string;
        position: object;
    }[]) => void;
    centerCallback?: (center: {
        lat: number;
        lng: number;
    }) => void;
    singleMarker?: boolean;
    singleMarkerCallback?: (marker: {
        coordinates: {
            lat: number;
            lng: number;
        };
        address: string;
    }) => void;
    eventLatitude?: number;
    eventLongitude?: number;
    eventAddress?: string;
}
export declare const LocationPicker: ({ posCallback, centerCallback, singleMarker, singleMarkerCallback, eventAddress, eventLatitude, eventLongitude, }: LocationPickerProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LocationPicker.d.ts.map
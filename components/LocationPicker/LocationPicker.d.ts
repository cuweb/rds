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
}
export declare const LocationPicker: ({ posCallback, centerCallback, singleMarker, singleMarkerCallback, }: LocationPickerProps) => JSX.Element;
//# sourceMappingURL=LocationPicker.d.ts.map
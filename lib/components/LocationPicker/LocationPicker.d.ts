export interface SingleMarkerInterface {
    address: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}
interface ILocationPickerProps {
    address?: string;
    markerCallback?: (coordinates: SingleMarkerInterface) => void;
}
export declare function LocationPicker({ address, markerCallback }: ILocationPickerProps): import("react/jsx-runtime").JSX.Element | null;
export {};

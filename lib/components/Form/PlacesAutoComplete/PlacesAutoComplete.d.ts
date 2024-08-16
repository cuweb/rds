import { FieldComponentProps } from '../FormField/FormField';
export interface SingleMarkerInterface {
    coordinates: {
        lat: number;
        lng: number;
    };
    address: string;
}
export interface PlacesAutoCompleteInterface extends FieldComponentProps {
    showmap?: boolean;
}
export declare const PlacesAutoComplete: ({ name, showmap, ...rest }: PlacesAutoCompleteInterface) => import("react/jsx-runtime").JSX.Element;

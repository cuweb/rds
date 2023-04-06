import type { FieldHookConfig } from 'formik';
export interface PlacesAutoCompleteProps {
    condition?: () => boolean;
    eventAddress?: string;
    eventLatitude?: string;
    eventLongitude?: string;
}
export declare const PlacesAutoComplete: ({ condition, eventAddress, eventLatitude, eventLongitude, ...props }: PlacesAutoCompleteProps & FieldHookConfig<object>) => JSX.Element;
//# sourceMappingURL=PlacesAutoComplete.d.ts.map
import { FieldProps } from '../FormField/FormField';

export interface DateTimeProps extends FieldProps {
    minDate?: Date;
    maxDate?: Date;
    showTime?: boolean;
    dateFormat?: string;
    timeFormat?: string;
    placeholder?: string;
}
export declare const DateTime: ({ ...props }: DateTimeProps) => import("react/jsx-runtime").JSX.Element;

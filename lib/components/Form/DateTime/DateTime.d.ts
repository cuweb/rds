import { FieldComponentProps } from '../FormField/FormField';
export interface DateTimeProps extends FieldComponentProps {
    minDate?: Date;
    maxDate?: Date;
    showTime?: boolean;
    dateFormat?: string;
    timeFormat?: string;
    placeholder?: string;
    onChange?: (date: Date) => void;
}
export declare const DateTime: ({ ...props }: DateTimeProps) => import("react/jsx-runtime").JSX.Element;

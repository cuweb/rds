import { FieldComponentProps } from '../FormField/FormField';
export interface DateTimeProps extends FieldComponentProps {
    minDate?: Date;
    maxDate?: Date;
    showTime?: boolean;
    dateFormat?: string;
    timeFormat?: string;
    placeholder?: string;
    isClearable?: boolean;
    onChange?: (date: Date | null) => void;
    hasPrefix?: React.ReactNode;
    hasSuffix?: React.ReactNode;
}
export declare const DateTime: ({ ...props }: DateTimeProps) => import("react/jsx-runtime").JSX.Element;

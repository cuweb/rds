
export interface DateTimeProps {
    label: string;
    name: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    helper?: string;
    required?: boolean;
    customMinDate?: Date;
    customMaxDate?: Date;
    showTime?: boolean;
    dateFormat?: string;
    timeFormat?: string;
}
export declare const DateTime: ({ ...props }: DateTimeProps) => import("react/jsx-runtime").JSX.Element;

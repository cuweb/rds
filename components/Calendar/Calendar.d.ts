export interface CalendarProps {
    events?: {
        id: number;
        name: string;
        imageUrl: string;
        startDatetime: string;
        endDatetime: string;
    }[];
    callback: (d: Date) => void;
    defaultDate?: string;
}
export declare const Calendar: ({ events, callback, defaultDate }: CalendarProps) => JSX.Element;
//# sourceMappingURL=Calendar.d.ts.map
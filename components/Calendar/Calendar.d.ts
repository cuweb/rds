export interface CalendarProps {
    events?: {
        id: number;
        name: string;
        imageUrl: string;
        startDatetime: string;
        endDatetime: string;
    }[];
    callback: (d: Date) => void;
    startDate?: string;
}
export declare const Calendar: ({ events, callback, startDate }: CalendarProps) => JSX.Element;
//# sourceMappingURL=Calendar.d.ts.map
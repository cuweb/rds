export interface CalendarProps {
    events?: {
        id: number;
        name: string;
        imageUrl: string;
        startDatetime: string;
        endDatetime: string;
    }[];
    callback: (d: Date) => void;
}
export declare const Calendar: ({ events, callback }: CalendarProps) => JSX.Element;
//# sourceMappingURL=Calendar.d.ts.map
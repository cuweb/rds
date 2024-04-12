export interface MultiDayCalendarProps {
    events?: {
        id: number;
        name: string;
        imageUrl: string;
        startDatetime: string;
        endDatetime: string;
    }[];
    callback: (selectedDays: Date[]) => void;
    defaultDate?: string;
}
export declare const MultiDayCalendar: ({ events, callback, defaultDate }: MultiDayCalendarProps) => import("react/jsx-runtime").JSX.Element;

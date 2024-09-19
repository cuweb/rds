import { PropsWithChildren } from '../../../node_modules/react';
export interface TimelineEventProps {
    date: string;
    title: string;
    description: string;
}
export declare const TimelineEvent: ({ date, title, description }: TimelineEventProps) => import("react/jsx-runtime").JSX.Element;
export interface TimelineProps {
    events: TimelineEventProps[];
}
export declare const Timeline: ({ events }: PropsWithChildren<TimelineProps>) => import("react/jsx-runtime").JSX.Element;

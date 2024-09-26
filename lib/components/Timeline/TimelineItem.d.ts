export interface TimelineItemProps {
    title: string;
    headerType?: 'h2' | 'h3';
    children?: React.ReactNode;
    aside: string;
}
export declare const TimelineItem: ({ title, headerType, children, aside }: TimelineItemProps) => import("react/jsx-runtime").JSX.Element;

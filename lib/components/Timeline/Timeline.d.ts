export interface TimelineProps {
    children: React.ReactNode;
}
export declare const TimelineWrapper: {
    ({ children }: TimelineProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Timeline: {
    ({ children }: TimelineProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Item: ({ title, headerType, children, aside }: import('./TimelineItem').TimelineItemProps) => import("react/jsx-runtime").JSX.Element;
};

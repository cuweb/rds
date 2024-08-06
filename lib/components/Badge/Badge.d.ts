export interface BadgeProps {
    text: string;
    link?: string;
    color?: 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'grey';
    noWordBreak?: boolean;
}
export declare const Badge: ({ text, link, color, noWordBreak }: BadgeProps) => import("react/jsx-runtime").JSX.Element;

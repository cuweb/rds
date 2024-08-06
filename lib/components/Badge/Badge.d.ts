export interface BadgeProps {
    text: string;
    color?: 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'grey';
    noWordBreak?: boolean;
}
export declare const Badge: ({ text, color, noWordBreak }: BadgeProps) => import("react/jsx-runtime").JSX.Element;

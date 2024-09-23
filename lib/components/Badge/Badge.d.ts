import { borderRadiusClasses } from '../../utils/propClasses';
type borderRadiusKeys = keyof typeof borderRadiusClasses;
export interface BadgeProps {
    text: string;
    link?: string;
    rounded?: borderRadiusKeys;
    color?: 'grey' | 'white' | 'black80' | 'white80' | 'green' | 'red' | 'yellow' | 'blue' | 'purple';
    noWordBreak?: boolean;
}
export declare const Badge: ({ text, link, rounded, color, noWordBreak }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};

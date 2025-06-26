import { iconSizeClasses, textColorClasses } from '../../utils/propClasses';
import { iconMap } from './iconMap';
type textColorKeys = keyof typeof textColorClasses;
type iconSizeKeys = keyof typeof iconSizeClasses;
type IconName = keyof typeof iconMap;
export interface IconProps {
    icon?: React.ReactNode;
    name?: IconName;
    color?: textColorKeys;
    size?: iconSizeKeys;
    className?: string;
}
export declare const Icon: ({ icon, name, color, size, className }: IconProps) => import("react/jsx-runtime").JSX.Element;
export {};

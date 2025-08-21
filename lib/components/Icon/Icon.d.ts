import { iconSizeClasses, textColorClasses } from '../../utils/propClasses';
type textColorKeys = keyof typeof textColorClasses;
type iconSizeKeys = keyof typeof iconSizeClasses;
export interface IconProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color?: textColorKeys;
    size?: iconSizeKeys;
}
export declare const Icon: {
    ({ icon, color, size }: IconProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

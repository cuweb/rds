import { rdsIconSize } from '../../utils/optionClasses';

export interface IconProps {
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>;
    color?: 'white' | 'red' | 'grey';
    size?: keyof typeof rdsIconSize;
}
export declare const Icon: {
    ({ icon, color, size }: IconProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

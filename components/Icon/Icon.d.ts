export interface IconProps {
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>;
    color?: 'black' | 'white' | 'red' | 'grey' | 'dark-grey' | 'green' | 'yellow';
    size?: '4' | '5' | '6' | '7' | '8' | '12' | '16' | '20';
}
export declare const Icon: {
    ({ icon, color, size }: IconProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Icon.d.ts.map
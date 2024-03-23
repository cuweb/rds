import { InputHTMLAttributes, ClassAttributes } from '../../../../node_modules/react';
export interface RadioProps {
    label?: string;
    caption?: string;
    name: string;
    options?: {
        name: string;
        label: string;
    }[];
    condition?: () => boolean;
}
export declare const Radio: {
    ({ label, options, condition, ...props }: RadioProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>): import('../../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};

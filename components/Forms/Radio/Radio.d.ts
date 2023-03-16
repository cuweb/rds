import { InputHTMLAttributes, ClassAttributes } from 'react';
export interface RadioProps {
    label?: string;
    caption?: string;
    name: string;
    options?: {
        name: string;
        label: string;
    }[];
}
export declare const Radio: {
    ({ label, options, ...props }: RadioProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Radio.d.ts.map
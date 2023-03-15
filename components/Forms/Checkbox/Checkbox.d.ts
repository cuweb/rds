import { InputHTMLAttributes, ClassAttributes } from 'react';
export interface CheckboxProps {
    label?: string;
    caption?: string;
    name: string;
    options?: [
        {
            name: string;
            label: string;
        }
    ];
}
export declare const Checkbox: {
    ({ label, options, ...props }: CheckboxProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Checkbox.d.ts.map
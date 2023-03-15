import { SelectHTMLAttributes, ClassAttributes } from 'react';
export interface SelectProps {
    label?: string;
    name: string;
    options?: [
        {
            label: string;
            value: string;
        }
    ];
}
export declare const Select: ({ label, options, ...props }: SelectProps & SelectHTMLAttributes<HTMLSelectElement> & ClassAttributes<HTMLSelectElement>) => JSX.Element;
//# sourceMappingURL=Select.d.ts.map
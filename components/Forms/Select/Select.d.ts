import { SelectHTMLAttributes, ClassAttributes } from 'react';
export interface SelectProps {
    label?: string;
    name: string;
    options?: {
        label: string;
        value: string;
    }[];
    condition?: () => boolean;
}
export declare const Select: ({ label, options, condition, ...props }: SelectProps & SelectHTMLAttributes<HTMLSelectElement> & ClassAttributes<HTMLSelectElement>) => JSX.Element;
//# sourceMappingURL=Select.d.ts.map
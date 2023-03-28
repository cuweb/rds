import { InputHTMLAttributes, ClassAttributes } from 'react';
export interface InputProps {
    label?: string;
    name: string;
    type?: string;
    condition?: () => boolean;
}
export declare const Input: {
    ({ label, condition, ...props }: InputProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Input.d.ts.map
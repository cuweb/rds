import { InputHTMLAttributes, ClassAttributes } from 'react';
export interface InputProps {
    label?: string;
    name: string;
    type?: string;
}
export declare const Input: {
    ({ label, ...props }: InputProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Input.d.ts.map
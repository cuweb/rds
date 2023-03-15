import { ClassAttributes, InputHTMLAttributes } from 'react';
export interface WYSIWYGProps {
    name: string;
    label?: string;
    type?: string;
    editor?: React.ElementType | string;
    placeholder?: string;
}
export declare const WYSIWYG: {
    ({ label, editor, placeholder, ...props }: WYSIWYGProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=WYSIWYG.d.ts.map
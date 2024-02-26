/// <reference types="react" />
export interface CardFooterProps {
    children: React.ReactNode;
    isType?: 'button' | 'badge';
    buttonType?: 'solid' | 'outline';
    buttonStyle?: 'red' | 'white' | 'dark-grey' | 'grey';
}
export declare const CardFooter: {
    ({ children, isType, buttonType, buttonStyle }: CardFooterProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

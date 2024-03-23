/// <reference types="react" />
export interface ListingFooterProps {
    children: React.ReactNode;
    isType?: 'button' | 'badge';
    buttonType?: 'solid' | 'outline';
    buttonStyle?: 'red' | 'white' | 'dark-grey' | 'grey';
}
export declare const ListingFooter: {
    ({ children, isType, buttonType, buttonStyle }: ListingFooterProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};

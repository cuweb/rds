import { default as React } from '../../../node_modules/react';

export interface SearchFormProps {
    callback: (k: string) => void;
    placeholder: string;
    children?: React.ReactNode;
}
export declare const SearchFormWrapper: {
    ({ callback, placeholder, children }: SearchFormProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const SearchForm: {
    ({ callback, placeholder, children }: SearchFormProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Results: {
        ({ resultsData }: import('./SearchFormResults').SearchProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

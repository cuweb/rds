import { default as React } from '../../../node_modules/react';

export interface SearchInputProps {
    callback: (k: string) => void;
    placeholder: string;
    children?: React.ReactNode;
}
export declare const SearchInputWrapper: {
    ({ callback, placeholder, children }: SearchInputProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const SearchInput: {
    ({ callback, placeholder, children }: SearchInputProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Results: {
        ({ resultsData }: import('./SearchInputResults').SearchInputProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

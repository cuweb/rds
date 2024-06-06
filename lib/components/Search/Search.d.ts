import { default as React } from '../../../node_modules/react';

export interface SearchProps {
    callback: (k: string) => void;
    placeholder: string;
    children?: React.ReactNode;
}
export declare const SearchWrapper: {
    ({ callback, placeholder, children }: SearchProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Search: {
    ({ callback, placeholder, children }: SearchProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Results: {
        ({ resultsData }: import('./SearchResults').SearchProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

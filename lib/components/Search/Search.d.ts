/// <reference types="react" />
export interface SearchWrapper {
    searchQuery: (query: string) => void;
    children?: React.ReactNode;
}
export declare const SearchWrapper: {
    ({ searchQuery, children }: SearchWrapper): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Search: {
    ({ searchQuery, children }: SearchWrapper): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Results: {
        ({ resultsData }: import('./SearchResults').SearchProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};

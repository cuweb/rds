export interface SourceDataProps {
    [k: string]: string | number;
    url: string;
}
export interface SearchProps {
    resultsData: SourceDataProps[];
}
export interface SelectedOption {
    url: string;
}
export declare const SearchResults: {
    ({ resultsData }: SearchProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

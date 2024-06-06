export interface SourceDataProps {
    [k: string]: string | number;
    url: string;
}
export interface SearchInputProps {
    resultsData: SourceDataProps[];
}
export interface SelectedOption {
    url: string;
}
export declare const SearchInputResults: {
    ({ resultsData }: SearchInputProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

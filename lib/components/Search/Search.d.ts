import { PropsWithChildren } from 'react';
export interface SourceDataProps {
    [k: string]: string | number;
}
export interface SearchProps {
    sourceData: SourceDataProps[];
    searchOn?: string;
    callback: (k: boolean) => void;
}
export declare const Search: ({ searchOn, sourceData, children, callback }: PropsWithChildren<SearchProps>) => import("react/jsx-runtime").JSX.Element;

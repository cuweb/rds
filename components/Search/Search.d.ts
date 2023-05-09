import { PropsWithChildren } from 'react';
export interface SourceDataProps {
    [k: string]: string | number;
}
export interface SearchProps {
    sourceData: SourceDataProps[];
    searchOn?: string;
}
export declare const Search: ({ searchOn, sourceData, children }: PropsWithChildren<SearchProps>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Search.d.ts.map
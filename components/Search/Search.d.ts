import { ReactNode } from 'react';
export interface SourceDataProps {
    [k: string]: string | number;
}
export interface SearchProps {
    sourceData: any;
    searchOn?: string;
    children?: ReactNode;
}
export declare const Search: ({ searchOn, sourceData, children }: SearchProps) => JSX.Element;
//# sourceMappingURL=Search.d.ts.map
/// <reference types="react" />
export interface ColumnDefinitionType {
    key: string;
    header: string;
    sort?: {
        sortable: boolean;
    };
}
export interface TableProps {
    data: {
        [k: string]: string | number | JSX.Element;
    }[];
    columns: ColumnDefinitionType[];
    hasStripes?: boolean;
    hasShadow?: boolean;
    hasBorder?: boolean;
    range?: number[];
}
export declare const Table: ({ data, columns, hasStripes, hasShadow, hasBorder, range }: TableProps) => import("react/jsx-runtime").JSX.Element;

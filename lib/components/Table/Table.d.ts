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
    noWordBreak?: boolean;
    range?: number[];
}
export declare const Table: ({ data, columns, hasShadow, hasStripes, noWordBreak, range, }: TableProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;

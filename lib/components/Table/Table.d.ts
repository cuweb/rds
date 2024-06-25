export interface ColumnDefinitionType {
    key: string;
    header: string;
    sort?: {
        sortable: boolean;
    };
    order?: 'ascending' | 'descending';
    default?: true;
}
export interface TableProps {
    data: {
        [k: string]: string | number | JSX.Element;
    }[];
    columns: ColumnDefinitionType[];
    hasStripes?: boolean;
    noWordBreak?: boolean;
    range?: number[];
}
export declare const Table: ({ data, columns, hasStripes, noWordBreak, range }: TableProps) => import("react/jsx-runtime").JSX.Element;

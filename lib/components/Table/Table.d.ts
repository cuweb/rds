export interface ColumnDefinitionType {
    key: string;
    header: string | React.ReactNode;
    sort?: {
        sortable: boolean;
    };
    order?: 'ascending' | 'descending';
    default?: true;
}
export interface TableProps {
    data: {
        [k: string]: string | number | React.ReactElement;
    }[];
    colgroup?: number[];
    columns: ColumnDefinitionType[];
    hasStripes?: boolean;
    noWordBreak?: boolean;
    range?: number[];
    enableRowHeader?: boolean;
}
export declare const Table: ({ data, colgroup, columns, hasStripes, noWordBreak, range, enableRowHeader, }: TableProps) => import("react/jsx-runtime").JSX.Element;

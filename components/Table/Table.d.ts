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
export declare const Table: ({ data, columns, hasStripes, hasShadow, hasBorder, range }: TableProps) => JSX.Element;
//# sourceMappingURL=Table.d.ts.map
import { ColumnDefinitionType } from './Table';
type TableRowsProps = {
    data: {
        [k: string]: string | number | JSX.Element;
    }[];
    columns: ColumnDefinitionType[];
    striped: boolean;
    range: number[];
};
declare const TableRows: ({ data, columns, striped, range }: TableRowsProps) => import("react/jsx-runtime").JSX.Element;
export default TableRows;
//# sourceMappingURL=TableRows.d.ts.map
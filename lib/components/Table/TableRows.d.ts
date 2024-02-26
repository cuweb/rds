/// <reference types="react" />
import { ColumnDefinitionType } from './Table';
type TableRowsProps = {
    data: {
        [k: string]: string | number | JSX.Element;
    }[];
    columns: ColumnDefinitionType[];
    striped: boolean;
    range: number[];
};
declare const TableRows: ({ data, columns, striped }: TableRowsProps) => import("react/jsx-runtime").JSX.Element;
export default TableRows;

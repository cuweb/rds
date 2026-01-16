import { ColumnDefinitionType } from './Table';
type TableRowsProps = {
    data: {
        [k: string]: string | number | React.ReactElement;
    }[];
    columns: ColumnDefinitionType[];
    striped: boolean;
    range: number[];
    enableRowHeader: boolean;
};
declare const TableRows: ({ data, columns, striped, enableRowHeader }: TableRowsProps) => import("react/jsx-runtime").JSX.Element;
export default TableRows;

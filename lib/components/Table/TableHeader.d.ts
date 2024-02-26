import { ColumnDefinitionType } from './Table';
interface TableHeaderProps {
    columns: ColumnDefinitionType[];
    sortData: (a: string, s: boolean) => void;
}
declare const TableHeader: ({ columns, sortData }: TableHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default TableHeader;

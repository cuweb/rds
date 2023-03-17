import { ColumnDefinitionType } from './Table';
interface TableHeaderProps {
    columns: ColumnDefinitionType[];
    sortData: (a: string, s: boolean) => void;
}
declare const TableHeader: ({ columns, sortData }: TableHeaderProps) => JSX.Element;
export default TableHeader;
//# sourceMappingURL=TableHeader.d.ts.map
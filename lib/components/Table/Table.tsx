import TableHeader from './TableHeader'
import TableRows from './TableRows'
import { useSortableTable } from '../../hooks/useSortableTable'

export interface ColumnDefinitionType {
  key: string
  header: string
  sort?: { sortable: boolean }
}

export interface TableProps {
  data: {
    [k: string]: string | number | JSX.Element
  }[]
  columns: ColumnDefinitionType[]
  hasStripes?: boolean
  hasShadow?: boolean
  range?: number[]
}

export const Table = ({ data, columns, hasStripes = false, hasShadow, range = [1, -1] }: TableProps) => {
  const [tableData, setTableData] = useSortableTable(data)
  const shadowStyle = hasShadow ? 'shadow-lg' : ''

  return (
    <div className={`not-prose overflow-x-auto rounded-lg ${shadowStyle}`}>
      <table className="min-w-full table-auto cu-table">
        <TableHeader columns={columns} sortData={setTableData} />
        <TableRows data={tableData} columns={columns} striped={hasStripes} range={range} />
      </table>
    </div>
  )
}

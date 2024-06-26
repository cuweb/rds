import TableHeader from './TableHeader'
import TableRows from './TableRows'
import { useSortableTable } from '../../hooks/useSortableTable'
import { useEffect } from 'react'

export interface ColumnDefinitionType {
  key: string
  header: string
  sort?: { sortable: boolean }
  order?: 'ascending' | 'descending'
  default?: true
}

export interface TableProps {
  data: {
    [k: string]: string | number | JSX.Element
  }[]
  columns: ColumnDefinitionType[]
  hasStripes?: boolean
  noWordBreak?: boolean
  range?: number[]
}

export const Table = ({ data, columns, hasStripes = false, noWordBreak = false, range = [1, -1] }: TableProps) => {
  const [tableData, setTableData] = useSortableTable(data)

  useEffect(() => {
    const defaultColumn = columns.find((column) => column.default)

    if (defaultColumn) {
      setTableData(defaultColumn.key, defaultColumn?.order === 'ascending')
    }
  }, [])

  return (
    <div className={`cu-table cu-component-spacing not-prose overflow-x-auto rounded-lg shadow-lg`}>
      <table className="min-w-full table-auto cu-table">
        <TableHeader columns={columns} noWordBreak={noWordBreak} sortData={setTableData} />
        <TableRows data={tableData} columns={columns} striped={hasStripes} range={range} />
      </table>
    </div>
  )
}

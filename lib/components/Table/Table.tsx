import TableHeader from './TableHeader'
import TableRows from './TableRows'
import { useSortableTable } from '../../hooks/useSortableTable'
import { useEffect, useRef } from 'react'

export interface ColumnDefinitionType {
  key: string
  header: string
  sort?: { sortable: boolean }
  order?: 'ascending' | 'descending'
  default?: true
  width?: string
}

export interface TableProps {
  data: {
    [k: string]: string | number | JSX.Element
  }[]
  columns: ColumnDefinitionType[]
  hasStripes?: boolean
  noWordBreak?: boolean
  range?: number[]
  enableRowHeader?: boolean
}

export const Table = ({
  data,
  columns,
  hasStripes = false,
  noWordBreak = false,
  range = [1, -1],
  enableRowHeader = false,
}: TableProps) => {
  const [tableData, setTableData] = useSortableTable(data)

  const hasMounted = useRef(false)

  useEffect(() => {
    if (!hasMounted.current) {
      const defaultColumn = columns.find((column) => column.default)

      if (defaultColumn) {
        setTableData(defaultColumn.key, defaultColumn?.order === 'ascending')
      }
      hasMounted.current = true
    }
  }, [columns, setTableData])

  const tableClassName = columns.some((column) => column.width) ? 'table-fixed w-full' : 'table-auto'

  return (
    <div className={`cu-table cu-component not-prose overflow-x-auto rounded-lg shadow-lg`}>
      <table className={`min-w-full cu-table ${tableClassName}`}>
        <TableHeader columns={columns} noWordBreak={noWordBreak} sortData={setTableData} />
        <TableRows
          data={tableData}
          columns={columns}
          striped={hasStripes}
          range={range}
          enableRowHeader={enableRowHeader}
        />
      </table>
    </div>
  )
}

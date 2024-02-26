import TableHeader from './TableHeader'
import TableRows from './TableRows'
import { useSortableTable } from '../../hooks/useSortableTable'
import { styles } from './Table.Styles'

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
  hasBorder?: boolean
  range?: number[]
}

export const Table = ({ data, columns, hasStripes = false, hasShadow, hasBorder, range = [1, -1] }: TableProps) => {
  const [tableData, setTableData] = useSortableTable(data)
  const borderStyle = hasBorder ? styles.border : ''
  const shadowStyle = hasShadow ? styles.shadow : ''

  return (
    <table className={`cu-table ${styles.table} ${borderStyle} ${shadowStyle}`}>
      <TableHeader columns={columns} sortData={setTableData} />
      <TableRows data={tableData} columns={columns} striped={hasStripes} range={range} />
    </table>
  )
}

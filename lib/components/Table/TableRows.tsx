import { ColumnDefinitionType } from './Table'
import { styles } from './Table.Styles'

type TableRowsProps = {
  data: {
    [k: string]: string | number | JSX.Element
  }[]
  columns: ColumnDefinitionType[]
  striped: boolean
  range: number[]
  enableRowHeader: boolean
}

const TableRows = ({ data, columns, striped, enableRowHeader }: TableRowsProps) => {
  const stripedStyles = striped ? `${styles.striped} ${styles.borders}` : styles.borders

  const rows = data.map((row, index) => (
    <tr className={stripedStyles} key={`row-${index}`}>
      {columns.map((column, index) => {
        // Directly checking and typecasting to string before checking length
        const cellContent = row[column.key]

        return enableRowHeader && index == 0 ? (
          <th scope="row" key={`cell-${index}`} className={`${styles.tableGlobal} ${styles.tableBodyRow}`}>
            {cellContent}
          </th>
        ) : (
          <td key={`cell-${index}`} className={`${styles.tableGlobal} ${styles.tableBodyRow}`}>
            {cellContent}
          </td>
        )
      })}
    </tr>
  ))

  return <tbody>{rows}</tbody>
}

export default TableRows

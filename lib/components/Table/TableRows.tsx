import { ColumnDefinitionType } from './Table'
import { styles } from './Table.Styles'

type TableRowsProps = {
  data: {
    [k: string]: string | number | JSX.Element
  }[]
  columns: ColumnDefinitionType[]
  striped: boolean
  range: number[]
}

const TableRows = ({ data, columns, striped }: TableRowsProps) => {
  const stripedStyles = striped ? `${styles.striped} ${styles.borders}` : styles.borders

  const rows = data.map((row, index) => (
    <tr className={stripedStyles} key={`row-${index}`}>
      {columns.map((column, index2) => {
        // Directly checking and typecasting to string before checking length
        const cellContent = row[column.key]
        const isLongText = typeof cellContent === 'string' && cellContent.length > 20

        return (
          <td
            key={`cell-${index2}`}
            className={`${styles.tableGlobal} ${styles.tableBodyRow} ${isLongText ? styles.cellWidth : ''}`}
          >
            {cellContent}
          </td>
        )
      })}
    </tr>
  ))

  return <tbody>{rows}</tbody>
}

export default TableRows

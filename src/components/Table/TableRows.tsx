import { styles } from './Table.Styles'
import { ColumnDefinitionType } from './Table'

type TableRowsProps = {
  data: {
    [k: string]: string | number | JSX.Element
  }[]
  columns: ColumnDefinitionType[]
  striped: boolean
  range: number[] // may be used for pagination , need to investigate more
}

const TableRows = ({ data, columns, striped }: TableRowsProps) => {
  const stripedStyles = striped ? styles.striped : ''

  const rows = data.map((row, index) => {
    return (
      <tr className={`${stripedStyles}`} key={`row-${index}`}>
        {columns.map((column, index2) => {
          return (
            <td key={`cell-${index2}`} className={`${styles.td}`}>
              <>{row[column.key]}</>
            </td>
          )
        })}
      </tr>
    )
  })

  return <tbody className={styles.tbody}>{rows}</tbody>
}

export default TableRows

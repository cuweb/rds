import { ColumnDefinitionType } from './Table'

type TableRowsProps = {
  data: {
    [k: string]: string | number | JSX.Element
  }[]
  columns: ColumnDefinitionType[]
  striped: boolean
  range: number[]
}

const styles = {
  core: `whitespace-nowrap px-3 py-4 text-sm text-cu-black-600`,
  tbody: `divide-y divide-gray-200 bg-white`,
}

const TableRows = ({ data, columns, striped, range }: TableRowsProps) => {
  const stripedStyles = striped ? 'odd:bg-white even:bg-gray-50' : 'hover:bg-blue-50'
  const rows = data.slice(range[0] - 1, range[1]).map((row, index) => {
    return (
      <tr
        className={`${stripedStyles} [&>td]:border-cu-gray-100 [&>td]:border-b [&>td]:last:border-0`}
        key={`row-${index}`}
      >
        {columns.map((column, index2) => {
          return (
            <td key={`cell-${index2}`} className={`${styles.core}`}>
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

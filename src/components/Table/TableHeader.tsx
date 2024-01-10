import { useState } from 'react'
import { ChevronUpDownIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { ColumnDefinitionType } from './Table'
import { styles } from './Table.Styles'

interface TableHeaderProps {
  columns: ColumnDefinitionType[]
  sortData: (a: string, s: boolean) => void
}

const TableHeader = ({ columns, sortData }: TableHeaderProps) => {
  const [ascending, setAscending] = useState(true)
  const [active, setActive] = useState('')

  const handleSortChange = (key: string) => {
    const activeColumn = key
    let asc = true

    if (key === active) {
      asc = !ascending
    }

    setActive(activeColumn)
    setAscending(asc)
    sortData(activeColumn, asc)
  }

  const headers = columns.map((column: ColumnDefinitionType, index) => {
    const sortableStyles = column?.sort?.sortable ? 'hover:cursor-pointer' : 'hover:cursor-auto'

    return (
      <th
        scope="col"
        key={`headerCell-${index}`}
        className={`${styles.thead} ${styles.td} ${sortableStyles}`}
        onClick={() => (column?.sort?.sortable ? handleSortChange(column.key) : undefined)}
        aria-sort={
          column.key === active && ascending
            ? 'descending'
            : column.key === active && !ascending
              ? 'ascending'
              : undefined
        }
        aria-label={column?.sort?.sortable ? 'Sort by ' + column.key : undefined}
      >
        {column.sort?.sortable ? (
          <div className="flex items-center">
            <div>{column.header}</div>
            {column.key === active && ascending ? (
              <ChevronDownIcon className="ml-2 inline-block h-4 w-4" />
            ) : column.key === active && !ascending ? (
              <ChevronUpIcon className="ml-2 inline-block h-4 w-4" />
            ) : (
              <ChevronUpDownIcon className="ml-2 inline-block h-4 w-4" />
            )}
          </div>
        ) : (
          column.header
        )}
      </th>
    )
  })

  return (
    <thead className={styles.thead}>
      <tr>{headers}</tr>
    </thead>
  )
}

export default TableHeader

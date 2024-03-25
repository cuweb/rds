import { useState } from 'react'
import { ChevronUpDownIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { ColumnDefinitionType } from './Table'
import { styles } from './Table.Styles'

interface TableHeaderProps {
  columns: ColumnDefinitionType[]
  noWordBreak: boolean
  sortData: (a: string, s: boolean) => void
}

const TableHeader = ({ columns, noWordBreak, sortData }: TableHeaderProps) => {
  const [ascending, setAscending] = useState(true)
  const [active, setActive] = useState('')
  const wordBreakClass = noWordBreak ? 'whitespace-nowrap' : ''

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
        className={`${styles.tableGlobal} ${styles.tableHeaderRow} ${sortableStyles} ${wordBreakClass} ${column.header.length > 20 ? styles.cellWidth : ''}`}
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
              <ChevronDownIcon className="inline-block w-4 h-4 ml-2" />
            ) : column.key === active && !ascending ? (
              <ChevronUpIcon className="inline-block w-4 h-4 ml-2" />
            ) : (
              <ChevronUpDownIcon className="inline-block w-4 h-4 ml-2" />
            )}
          </div>
        ) : (
          column.header
        )}
      </th>
    )
  })

  return (
    <thead className="border-b border-cu-black-200 bg-cu-black-50">
      <tr>{headers}</tr>
    </thead>
  )
}

export default TableHeader

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const defaultColumn = columns.find((column) => column.default)

    if (defaultColumn) {
      setActive(defaultColumn.key)
      setAscending(defaultColumn?.order === 'ascending' ? true : false)
      sortData(defaultColumn.key, defaultColumn?.order === 'ascending')
    }
  }, [])

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
      >
        {column.sort?.sortable ? (
          <div className="flex items-center">
            <div>{column.header}</div>
            {column.key === active && ascending ? (
              <button
                className="block w-4 h-full ml-2"
                aria-label={column?.sort?.sortable ? 'Sort ' + column.key + ' by ascending order' : undefined}
              >
                <ChevronDownIcon className="inline-block" />
              </button>
            ) : column.key === active && !ascending ? (
              <button
                className="block w-4 h-full ml-2"
                aria-label={column?.sort?.sortable ? 'Sort ' + column.key + ' by descending order' : undefined}
              >
                <ChevronUpIcon className="inline-block" />
              </button>
            ) : (
              <button
                className="block w-4 h-full ml-2"
                aria-label={column?.sort?.sortable ? 'Sort by ' + column.key : undefined}
              >
                <ChevronUpDownIcon className="inline-block" />
              </button>
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

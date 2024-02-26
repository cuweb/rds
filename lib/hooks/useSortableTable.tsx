import { useState, useEffect } from 'react'

interface DataProps {
  [k: string]: string | number | JSX.Element
}

export const useSortableTable = (data: DataProps[]) => {
  const [tableData, setTableData] = useState(data)
  useEffect(() => {
    setTableData(data)
  }, [data])

  const sortTableData = (orderBy: string, asc: boolean) => {
    if (orderBy) {
      const sortedData = [...tableData].sort((a, b) => {
        if (a[orderBy] === null) return 1
        if (b[orderBy] === null) return -1
        if (a[orderBy] === null && b[orderBy] === null) return 0
        return (
          a[orderBy].toString().localeCompare(b[orderBy].toString(), 'en', {
            numeric: true,
          }) * (asc ? 1 : -1)
        )
      })
      setTableData(sortedData)
    }
  }

  return [tableData, sortTableData] as const
}

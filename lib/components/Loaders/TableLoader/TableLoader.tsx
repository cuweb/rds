import React from 'react'

interface TableLoaderProps {
  numRow?: number
  numCol?: number
}

export const TableLoader: React.FC<TableLoaderProps> = ({ numRow = 5, numCol = 5 }) => {
  // Generate table rows with span elements for each column
  const rows = Array.from({ length: numRow }, (_, rowIndex) => (
    <>
      {rowIndex % 2 === 0 ? (
        <div key={rowIndex} className="flex space-x-1">
          {Array.from({ length: numCol }, (_, colIndex) => (
            <span key={colIndex} className="animate-pulse grow h-12 bg-cu-black-100"></span>
          ))}
        </div>
      ) : (
        <div key={rowIndex} className="flex space-x-1">
          {Array.from({ length: numCol }, (_, colIndex) => (
            <span key={colIndex} className="animate-pulse grow h-12 bg-cu-black-50"></span>
          ))}
        </div>
      )}
    </>
  ))

  return (
    <div className="cu-loader-table cu-block-spacing rounded-md overflow-hidden grid gap-1">
      {rows}
      <span className="sr-only">Loading...</span>
    </div>
  )
}

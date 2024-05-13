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
        <div key={rowIndex} className="flex space-x-2 mb-2">
          {' '}
          {/* Added mb-2 for bottom margin */}
          {Array.from({ length: numCol }, (_, colIndex) => (
            <span key={colIndex} className="animate-pulse grow h-7 bg-cu-black-200"></span>
          ))}
        </div>
      ) : (
        <div key={rowIndex} className="flex space-x-2 mb-2">
          {' '}
          {/* Added mb-2 for bottom margin */}
          {Array.from({ length: numCol }, (_, colIndex) => (
            <span key={colIndex} className="animate-pulse grow h-7 bg-cu-black-100"></span>
          ))}
        </div>
      )}
    </>
  ))

  return (
    <>
      {rows}
      <span className="sr-only">Loading...</span>
    </>
  )
}

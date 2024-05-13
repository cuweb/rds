import React from 'react'

interface IGridColsClass {
  [key: string | number]: string
}

const gridColsClass: IGridColsClass = {
  1: 'grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
  '1/3': 'lg:grid-cols-3 lg:[&>*:last-child]:col-span-2',
  '2/3': 'lg:grid-cols-3 lg:[&>*:first-child]:col-span-2',
}

interface RowLoaderProps {
  cols: number | string
  fields: number
}

export const RowLoader: React.FC<RowLoaderProps> = ({ cols, fields }) => {
  const gridSpacing = cols ? gridColsClass[cols] : 'space-y-5'

  return (
    <div className={`grid ${gridSpacing} gap-5 items-start`}>
      {Array.from({ length: fields }, (_, fieldIndex) => (
        <span key={fieldIndex} className="animate-pulse block w-full h-14 rounded-md bg-cu-black-100"></span>
      ))}
    </div>
  )
}

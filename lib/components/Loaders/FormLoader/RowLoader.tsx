import React from 'react'
import { gridColsClass } from '../../../helpers/optionClasses'

export interface RowLoaderProps {
  cols: 1 | 2 | 3 | 4 | '1/3' | '2/3'
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

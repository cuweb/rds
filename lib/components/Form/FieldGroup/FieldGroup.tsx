'use client'

import { gridColsClass } from '../../../helpers/optionClasses'
export interface FieldGroupProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4 | '1/3' | '2/3'
  alignment?: 'top' | 'bottom' | 'center'
}

export const FieldGroup = ({ children, cols, alignment }: FieldGroupProps) => {
  const gridSpacing = cols ? gridColsClass[cols] : ''
  let alignmentClass = 'items-start'

  if (alignment === 'bottom') {
    alignmentClass = 'items-end'
  } else if (alignment === 'center') {
    alignmentClass = 'items-center'
  }
  return (
    <div
      className={`grid ${gridSpacing} ${alignmentClass} gap-6 md:gap-10 items-start cu-field-wrapper cu-component-updated`}
    >
      {children}
    </div>
  )
}

export default FieldGroup

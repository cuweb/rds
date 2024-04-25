'use client'

import { gridColsClass } from '../../../helpers/optionClasses'
export interface FieldGroupProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4 | '1/3' | '2/3'
}

export const FieldGroup = ({ children, cols }: FieldGroupProps) => {
  const gridSpacing = cols ? gridColsClass[cols] : 'space-y-5'
  return <div className={`grid ${gridSpacing} gap-5 items-start cu-field-wrapper`}>{children}</div>
}

export default FieldGroup

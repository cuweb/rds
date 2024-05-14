'use client'
import { gridColsClass } from '../../../helpers/optionClasses'

export interface FieldWrapperProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4 | '1/3' | '2/3'
}

export const FieldWrapper = ({ children, cols }: FieldWrapperProps) => {
  const gridSpacing = cols ? gridColsClass[cols] : 'space-y-5'
  return <div className={`grid ${gridSpacing} gap-5 items-start cu-field-wrapper`}>{children}</div>
}

export default FieldWrapper

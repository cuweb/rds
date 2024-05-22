import React from 'react'
import { layoutSpacing, proseStyles } from '../../utils/globalClasses'

export interface MainProps {
  children: React.ReactNode
  noProse?: boolean
}

export const Main = ({ children, noProse = false }: MainProps) => {
  const useProse = noProse ? '' : proseStyles.base
  return <main className={`cu-main ${layoutSpacing.main} ${useProse}`}>{children}</main>
}

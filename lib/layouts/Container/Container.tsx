import React from 'react'
import { layoutSpacing } from '../../utils/globalClasses'
// import { layoutSpacing, proseStyles } from '../../utils/globalClasses'

export interface ContainerProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  isGrey?: boolean
  maxWidth?: 'none' | 'full' | '5xl' | '7xl'
}

export const Container = ({ children, as = 'section', isGrey, maxWidth = '5xl' }: ContainerProps) => {
  const ContainerComponent = as
  const childWidth = maxWidth ? `cu-container-${maxWidth}` : ''
  const bgStyles = isGrey ? layoutSpacing.containerGrey : layoutSpacing.containerWhite

  return (
    <ContainerComponent className={`cu-container not-contained ${childWidth} ${bgStyles}`}>
      {children}
    </ContainerComponent>
  )
  // return <div className={`cu-container not-contained ${proseStyles.base} ${childWidth} ${bgStyles}`}>{children}</div>
}

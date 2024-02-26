import React from 'react'
import { layoutSpacing, proseStyles } from '../../utils/globalClasses'

export interface ContainerProps {
  children?: React.ReactNode
  isGrey?: boolean
  maxWidth?: 'none' | 'full' | '5xl' | '7xl'
}

export const Container = ({ children, isGrey, maxWidth = '5xl' }: ContainerProps) => {
  const childWidth = maxWidth ? `cu-container-${maxWidth}` : ''
  const bgStyles = isGrey ? layoutSpacing.containerGrey : layoutSpacing.containerWhite

  return <div className={`cu-container not-contained ${proseStyles.base} ${childWidth} ${bgStyles}`}>{children}</div>
}

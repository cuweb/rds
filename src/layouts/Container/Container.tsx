import React from 'react'
import { globalSpace, globalStyles } from '../../utils/globalClasses'

export interface ContainerProps {
  children?: React.ReactNode
  hasProse?: boolean
  bgColor?: 'white' | 'grey'
  maxWidth?: 'none' | 'full' | '5xl' | '7xl'
}

export const Container = ({ children, hasProse = false, bgColor = 'white', maxWidth = '5xl' }: ContainerProps) => {
  const addProse = hasProse ? globalStyles.prose : '[&>*:first-child]:-mt-0'
  const bgStyles =
    bgColor === 'grey'
      ? `bg-cu-black-50 ${globalSpace.paddingY} last:[&>*]:mb-0`
      : `bg-white ${globalSpace.paddingYHalf}`

  const childWidth = maxWidth ? `cu-container-${maxWidth}` : ''

  return (
    <>
      <div
        className={`cu-container not-contained ${globalSpace.marginNegX} ${globalSpace.paddingX} ${childWidth} ${bgStyles} ${addProse}`}
      >
        {children}
      </div>
    </>
  )
}

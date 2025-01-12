import React from 'react'
import { gridGapClasses } from '../../utils/propClasses'

type gridGapKeys = keyof typeof gridGapClasses

export interface BadgeGroupProps {
  children: React.ReactNode
  gap?: gridGapKeys
  isAbsolute?: boolean
  top?: number
  right?: number
  bottom?: number
  left?: number
}

const getPositionStyles = (top?: number, right?: number, bottom?: number, left?: number) => {
  const styles: React.CSSProperties = {}

  if (top !== undefined) {
    styles.top = `${top}px`
  }
  if (right !== undefined) {
    styles.right = `${right}px`
  }
  if (bottom !== undefined) {
    styles.bottom = `${bottom}px`
  }
  if (left !== undefined) {
    styles.left = `${left}px`
  }

  return styles
}

export const BadgeGroup = ({
  children,
  gap = '2',
  isAbsolute = false,
  top = 0,
  right,
  bottom,
  left = 0,
}: BadgeGroupProps) => {
  const position = isAbsolute ? 'absolute' : ''
  const positionStyles = isAbsolute ? getPositionStyles(top, right, bottom, left) : {}

  return (
    <div
      className={`cu-badgegroup cu-component-updated flex flex-wrap md:flex-1 ${position} ${gridGapClasses[gap]}`}
      style={positionStyles}
    >
      {children}
    </div>
  )
}

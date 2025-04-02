import React from 'react'
import { smallWidthClasses, figureAlignClasses } from '../../utils/propClasses'

type smallWidthKeys = keyof typeof smallWidthClasses
type figureAlignKeys = keyof typeof figureAlignClasses

export interface FloatBoxProps {
  children?: React.ReactNode
  smallWidth?: smallWidthKeys
  float?: figureAlignKeys
}

export const FloatBox = ({ children, smallWidth = 'lg', float = 'right' }: FloatBoxProps) => {
  return (
    <div className={`cu-floatbox ${figureAlignClasses[float]} ${smallWidthClasses[smallWidth]} w-full`}>{children}</div>
  )
}

import React from 'react'
// import { cardStyles } from './Card.Styles'
import { CardFigure } from './CardFigure'
import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'

export interface CardProps {
  children: React.ReactNode
  isCenter?: boolean
  noLink?: boolean
  hasShadow?: 'onCard' | 'onHover'
  isGrey?: boolean
  hasRedBorder?: boolean
}

const cardStyles = {
  card: `not-prose cu-card rounded-lg @container md:max-w-lg flex flex-col bg-cu-black-200`,
  whiteBg: `bg-white`,
  greyBg: `bg-cu-black-25`,
  shadow: `shadow-md shadow-cu-black-100`,
  shadowHover: `hover:shadow-lg hover:shadow-cu-black-200`,
  center: `text-center`,
  redBorder: `border-l-8 border-l-cu-red`,
  zoom: `duration-300 ease-in hover:scale-[1.04] cursor-pointer`,
}

export const CardWrapper = ({ children, isCenter, noLink, hasShadow, hasRedBorder, isGrey }: CardProps) => {
  const bgStyles = isGrey ? cardStyles.greyBg : cardStyles.whiteBg
  const addShadow =
    hasShadow === 'onCard'
      ? `${cardStyles.shadow} ${!noLink ? cardStyles.shadowHover : ''}`
      : hasShadow === 'onHover' && !noLink
      ? cardStyles.shadowHover
      : ''
  const addRedBorder = hasRedBorder ? cardStyles.redBorder : ''
  const centerText = isCenter ? cardStyles.center : ''
  const noLinkStyles = noLink ? '' : cardStyles.zoom

  return (
    <div className={`${cardStyles.card} ${addRedBorder} ${addShadow} ${centerText} ${noLinkStyles} ${bgStyles}`}>
      {children}
    </div>
  )
}

export const Card = Object.assign(CardWrapper, {
  Figure: CardFigure,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})

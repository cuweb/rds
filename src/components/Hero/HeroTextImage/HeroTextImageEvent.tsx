import React from 'react'
import { contentStyles } from './HeroTextImage.Styles'

export interface HeroTextImageEventProps {
  children?: React.ReactNode
  designation?: string
  title: string
  startDate?: string
  endDate?: string
  location?: string
  cost?: string
}

export const proseStyles = {
  base: `prose prose-rds prose-lg md:prose-xl max-w-none prose-img:w-full prose-img:rounded-lg`,
}

export const HeroTextImageEvent = ({
  children,
  title,
  startDate,
  endDate,
  location,
  cost,
}: HeroTextImageEventProps) => {
  return (
    <div className={`${contentStyles.contentWrapper} ${contentStyles.contentTopSpace}`}>
      <h1 className={`${contentStyles.header} ${contentStyles.headerOne}`}>{title}</h1>

      {startDate && <p className={contentStyles.largeText}>{startDate}</p>}
      {endDate && <p className={contentStyles.largeText}>{endDate}</p>}

      <ul>
        {location && <li>{location}</li>}
        {cost && <li>{cost}</li>}
      </ul>

      {children}
    </div>
  )
}

HeroTextImageEvent.displayName = 'HeroTextImage.Event'

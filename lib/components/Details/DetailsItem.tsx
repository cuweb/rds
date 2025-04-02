import React from 'react'

export interface DetailsItemProps {
  children?: React.ReactNode
  as?: 'li'
  isBold?: boolean
  iconName?: string
}

export const DetailsItem = ({ children, as = 'li', isBold = false, iconName }: DetailsItemProps) => {
  const DetailsItemComponent = as
  const boldStyle = isBold ? 'font-bold' : ''
  const iconPath = `https://cdn.carleton.ca/rds/assets/font-awesome/${iconName}.svg`

  return (
    <DetailsItemComponent className={`${boldStyle} ${iconName ? 'flex items-center' : ''}`}>
      {iconName ? (
        <>
          <span className="pr-2.5">
            <img src={iconPath} alt={`${iconName} icon`} className="w-6 h-6 inline-block" />
          </span>
          <p className="flex items-center">{children}</p>
        </>
      ) : (
        children
      )}
    </DetailsItemComponent>
  )
}

DetailsItem.displayName = 'Details.Item'

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
    <DetailsItemComponent className={`${boldStyle} ${iconName ? 'flex align-top' : ''}`}>
      {iconName ? (
        <>
          <span className="block w-6 flex-none mr-4">
            <img src={iconPath} alt={`${iconName} icon`} className="w-6 h-6 mt-1.5" />
          </span>
          <p>{children}</p>
        </>
      ) : (
        children
      )}
    </DetailsItemComponent>
  )
}

DetailsItem.displayName = 'Details.Item'

import React from 'react'
import { rdsFontSizes } from '../../../utils/optionClasses'
import { Icon } from '../../Icon/Icon'

// Set types for as props
type BaseItemTypeProps = 'li' | 'div'
type TitleTypeProps = 'h2' | 'h3'

export interface DetailsItemProps {
  children?: React.ReactNode
  fontSize?: 'base' | 'lg' | 'xl'
  title?: string
  description?: string
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
}

export interface ItemBaseProps {
  as?: keyof JSX.IntrinsicElements
}

export interface BaseItemProps {
  as?: BaseItemTypeProps
}

export interface TitleProps {
  as?: TitleTypeProps
}

const DetailsItemBase = ({ as: Component = 'div', children }: ItemBaseProps & DetailsItemProps) => {
  return (
    <Component className="not-prose relative flex items-center gap-2 p-6 focus:outline-none ">
      <div className="flex items-start gap-4">{children}</div>
    </Component>
  )
}

const Content = ({ children }: DetailsItemProps) => {
  return <div className="flex flex-auto flex-col gap-2">{children}</div>
}

const Title = ({ as = 'h3', fontSize = 'base', title }: TitleProps & DetailsItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-base font-semibold text-cu-black ${rdsFontSizes[fontSize]} `,
    },
    title,
  )
}

const IconDisplay = ({ icon }: DetailsItemProps) => {
  return <div className="w-auto flex-none">{icon && <Icon icon={icon} />}</div>
}

const Description = ({ description }: DetailsItemProps) => {
  return <p className="text-base text-cu-black-900">{description}</p>
}

// Set default for base component as props
DetailsItemBase.defaultProps = {
  as: 'li',
}

DetailsItemBase.displayName = 'DetailsItem'
Content.displayName = 'DetailsItem.Content'
Title.displayName = 'DetailsItem.Title'
IconDisplay.displayName = 'DetailsItem.IconDisplay'
Description.displayName = 'DetailsItem.Description'

export const DetailsItem = Object.assign(DetailsItemBase, {
  Content,
  Title,
  Icon,
  Description,
})

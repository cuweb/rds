import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { rdsFontSizes } from '../../../utils/tailwindClasses'
import { Badge } from '../../Badge/Badge'
import { Link } from '../../Link/Link'

// Set types for as props
type BaseItemTypeProps = 'li' | 'div'
type TitleTypeProps = 'h2' | 'h3'

export interface MarketplaceItemProps {
  children?: React.ReactNode
  fontSize?: 'base' | 'lg' | 'xl'
  title?: string
  link?: string
  image?: string
  alt?: string
  cost?: string
  condition?: string
  category?: string
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

const MarketplaceItemBase = ({ as: Component = 'div', children, link }: ItemBaseProps & MarketplaceItemProps) => {
  return (
    <Component>
      <Link
        href={link}
        className="not-prose group relative flex h-full cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-center gap-4">{children}</div>
        <ChevronRightIcon className="ml-auto h-5 w-5 flex-none text-cu-black-300" aria-hidden="true" />
      </Link>
    </Component>
  )
}

const Content = ({ children }: MarketplaceItemProps) => {
  return <div className="flex flex-auto flex-col gap-1">{children}</div>
}

const Title = ({ as = 'h3', fontSize = 'base', title }: TitleProps & MarketplaceItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    title,
  )
}

const Image = ({ image, alt }: MarketplaceItemProps) => {
  return (
    <div className="w-16 flex-none md:w-24">
      <img className="h-auto w-auto rounded lg:w-24" src={image} alt={alt} />
    </div>
  )
}

const Details = ({ cost, condition }: MarketplaceItemProps) => {
  return (
    <ul className="flex flex-wrap sm:gap-2">
      <li className="mr-2 flex items-center text-sm text-cu-black-700">
        {condition} condition for {cost}
      </li>
    </ul>
  )
}

const Category = ({ category }: MarketplaceItemProps) => {
  return (
    <div>
      <Badge>{category}</Badge>
    </div>
  )
}

// Set default for base component as props
MarketplaceItemBase.defaultProps = {
  as: 'li',
}

MarketplaceItemBase.displayName = 'MarketplaceItem'
Content.displayName = 'MarketplaceItem.Content'
Title.displayName = 'MarketplaceItem.Title'
Image.displayName = 'MarketplaceItem.Image'
Details.displayName = 'MarketplaceItem.Details'
Category.displayName = 'MarketplaceItem.Category'

export const MarketplaceItem = Object.assign(MarketplaceItemBase, {
  Content,
  Title,
  Image,
  Details,
  Category,
})

import { maxWidthClasses } from '../../utils/propClasses'
type maxWidthKeys = keyof typeof maxWidthClasses

export interface PlaceholderProps {
  name?: string
  maxWidth?: maxWidthKeys
}

export const Placeholder = ({ name = 'TBD', maxWidth = '5xl' }: PlaceholderProps) => {
  return (
    <div
      className={`cu-placeholder cu-component-spacing not-contained ${maxWidthClasses[maxWidth]} m-auto h-28 md:h-48 lg:h-60 grid border-dashed border-2 border-cu-black-200 rounded-lg items-center justify-center`}
    >
      {name}
    </div>
  )
}

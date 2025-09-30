import { Icon } from '../Icon'

export interface CardIconThumbProps {
  icon?: string
}

export const CardIconThumb = ({ icon }: CardIconThumbProps) => {
  // Check if the icon starts with 'file-' and ends with 'x'
  const modifiedIcon =
    icon && icon.startsWith('file-') && icon.endsWith('x') ? icon.substring(0, icon.length - 1) : icon

  console.log(modifiedIcon)

  return (
    <figure className="flex items-center justify-center w-12 h-12 mx-6 mt-5 mb-1.5 overflow-hidden">
      {modifiedIcon && <Icon name={modifiedIcon} size={48} color="#E91C24" className="cu-icon-thumb" />}
    </figure>
  )
}

CardIconThumb.displayName = 'Card.IconThumb'

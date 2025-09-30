import { Icon } from '../Icon'

export interface ListingIconThumbProps {
  icon?: string
}

export const ListingIconThumb = ({ icon }: ListingIconThumbProps) => {
  // Check if the icon starts with 'file-' and ends with 'x'
  const modifiedIcon =
    icon && icon.startsWith('file-') && icon.endsWith('x') ? icon.substring(0, icon.length - 1) : icon

  return (
    <figure className="flex items-center justify-center w-12 h-12">
      {modifiedIcon && (
        <Icon
          name={modifiedIcon}
          iconPath="/assets/font-awesome/"
          size={48}
          color="#f48c90"
          className="cu-icon-thumb"
        />
      )}
    </figure>
  )
}

ListingIconThumb.displayName = 'Card.IconThumb'

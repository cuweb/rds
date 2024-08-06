export interface ListingIconThumbProps {
  icon?: string
}

export const ListingIconThumb = ({ icon }: ListingIconThumbProps) => {
  const cdnPath = 'https://cdn.carleton.ca/rds/assets/font-awesome/'

  // Check if the icon starts with 'file-' and ends with 'x'
  const modifiedIcon =
    icon && icon.startsWith('file-') && icon.endsWith('x') ? icon.substring(0, icon.length - 1) : icon

  const iconPath = `${cdnPath}${modifiedIcon}.svg`
  const iconAlt = modifiedIcon ? modifiedIcon.replace(/-/g, ' ') : ''

  const redIcon = {
    filter: 'invert(20%) sepia(50%) saturate(7177%) hue-rotate(348deg) brightness(91%) contrast(100%)',
  }

  return (
    <figure className="flex items-center justify-center w-12 h-12">
      <img
        src={iconPath}
        alt={`An icon of a ${iconAlt}`}
        className="object-cover max-h-full cu-icon-thumb max-w-none"
        style={redIcon}
      />
    </figure>
  )
}

ListingIconThumb.displayName = 'Listing.IconThumb'

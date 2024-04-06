export interface ListingIconThumbProps {
  icon?: string
}

export const ListingIconThumb = ({ icon }: ListingIconThumbProps) => {
  const cdnPath = 'https://cdn.carleton.ca/rds/assets/font-awesome/'
  const iconPath = `${cdnPath}${icon}.svg`
  const iconAlt = icon ? icon.replace(/-/g, ' ') : ''

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

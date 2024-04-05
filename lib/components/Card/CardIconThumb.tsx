export interface CardIconThumbProps {
  icon?: string
}

export const CardIconThumb = ({ icon }: CardIconThumbProps) => {
  const cdnPath = 'https://cdn.carleton.ca/rds/assets/font-awesome/'
  const iconPath = `${cdnPath}${icon}.svg`

  // Remove dashes from icon name
  const iconAlt = icon ? icon.replace(/-/g, ' ') : ''

  // Use filter to change svg as image to red
  // const redIcon = {
  //   filter: 'invert(20%) sepia(50%) saturate(7177%) hue-rotate(348deg) brightness(91%) contrast(100%)',
  // }

  return (
    <figure className="flex items-center justify-center w-10 h-10 mx-6 mt-6 mb-2 overflow-hidden">
      <img src={iconPath} alt={`An icon of a ${iconAlt}`} className="cu-icon-thumb" />
    </figure>
  )
}

CardIconThumb.displayName = 'Card.IconThumb'

export interface CardIconThumbProps {
  icon?: string
  bgType?: 'none' | 'red' | 'white'
  hasShadow?: boolean
}

export const CardIconThumb = ({ icon, bgType = 'red', hasShadow }: CardIconThumbProps) => {
  const cdnPath = 'https://cdn.carleton.ca/rds/assets/font-awesome/'
  const iconPath = `${cdnPath}${icon}.svg`
  const iconShadow = hasShadow ? 'shadow-md' : ''

  // Set classes on icon and wrapping div
  let iconDiv

  switch (bgType) {
    case 'none':
      iconDiv = 'w-10 h-10'
      break
    case 'red':
      iconDiv = 'w-16 h-16 bg-cu-red rounded-md'
      break
    case 'white':
      iconDiv = 'w-16 h-16 bg-white rounded-md'
      break
    default:
      iconDiv = ''
      break
  }

  // Use filter to change svg as image to white
  const whiteIcon = {
    filter: 'invert(100%) sepia(5%) saturate(0%) hue-rotate(29deg) brightness(106%) contrast(107%)',
  }

  // Use filter to change svg as image to red
  const redIcon = {
    filter: 'invert(20%) sepia(50%) saturate(7177%) hue-rotate(348deg) brightness(91%) contrast(100%)',
  }

  // Remove dashes from icon name
  const iconAlt = icon ? icon.replace(/-/g, ' ') : ''

  return (
    <figure className={`flex items-center justify-center mx-6 mt-6 mb-2 overflow-hidden ${iconDiv} ${iconShadow}`}>
      <img
        src={iconPath}
        alt={`An icon of a ${iconAlt}`}
        className={`cu-icon-thumb ${bgType === 'none' ? '' : 'p-3'}`}
        style={bgType === 'red' ? whiteIcon : redIcon}
      />
    </figure>
  )
}

CardIconThumb.displayName = 'Card.IconThumb'

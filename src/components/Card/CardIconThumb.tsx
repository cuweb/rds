export interface CardIconThumbProps {
  icon?: string
  bgType?: 'none' | 'red' | 'white'
  hasShadow?: boolean
}

export const CardIconThumb = ({ icon, bgType = 'red', hasShadow }: CardIconThumbProps) => {
  const cdnPath = 'https://cdn.carleton.ca/rds/assets/font-awesome/'
  const iconPath = `${cdnPath}${icon}.svg`
  const iconShadow = hasShadow ? 'shadow-md' : ''

  const whiteIcon = {
    filter: 'invert(100%) sepia(5%) saturate(0%) hue-rotate(29deg) brightness(106%) contrast(107%)',
  }

  const redIcon = {
    filter: 'invert(20%) sepia(50%) saturate(7177%) hue-rotate(348deg) brightness(91%) contrast(100%)',
  }

  // Set classes on icon and wrapping div
  let iconDiv
  let iconSvg

  switch (bgType) {
    case 'none':
      iconDiv = 'w-10 h-10'
      iconSvg = 'fill-cu-red'
      break
    case 'red':
      iconDiv = 'w-16 h-16 bg-cu-red rounded-md'
      iconSvg = 'p-3 fill-white'
      break
    case 'white':
      iconDiv = 'w-16 h-16 bg-white rounded-md'
      iconSvg = 'p-3 fill-cu-red'
      break
    default:
      iconDiv = ''
      iconSvg = ''
      break
  }

  return (
    <>
      <figure className={`flex items-center justify-center mx-6 mt-6 mb-2 overflow-hidden ${iconDiv} ${iconShadow}`}>
        {icon && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={iconSvg}>
            <use xlinkHref={iconPath} />
          </svg>
        )}
      </figure>
      <figure className={`flex items-center justify-center mx-6 mt-6 mb-2 overflow-hidden ${iconDiv} ${iconShadow}`}>
        <img
          src={iconPath}
          alt={icon}
          className={bgType === 'none' ? '' : 'p-3'}
          style={bgType === 'red' ? whiteIcon : redIcon}
        />
      </figure>
    </>
  )
}

CardIconThumb.displayName = 'Card.IconThumb'

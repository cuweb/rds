export interface CardIconThumbProps {
  icon?: string
  bgType?: 'none' | 'solid' | 'shadow'
  svgPath?: string
}

export const CardIconThumb = ({ icon, bgType = 'solid', svgPath }: CardIconThumbProps) => {
  // Check if incoming svgPath uses carleton.ca
  const fontAwesome =
    !svgPath || svgPath.includes('carleton.ca') ? 'https://cdn.carleton.ca/rds/assets/graphics/' : svgPath

  // Set classes on icon and wrapping div
  let iconDiv
  let iconSvg

  switch (bgType) {
    case 'none':
      iconDiv = 'w-10 h-10'
      iconSvg = 'w-10 h-10 fill-cu-red'
      break
    case 'solid':
      iconDiv = 'w-16 h-16 bg-cu-red rounded-md'
      iconSvg = 'w-9 h-9 fill-white'
      break
    case 'shadow':
      iconDiv = 'w-16 h-16 bg-white shadow-md rounded-md'
      iconSvg = 'w-9 h-9 fill-cu-red'
      break
    default:
      iconDiv = ''
      iconSvg = ''
      break
  }

  return (
    <figure className={`flex items-center justify-center mx-6 mt-6 mb-2 overflow-hidden ${iconDiv}`}>
      <svg className={iconSvg}>
        <use xlinkHref={`${fontAwesome}fontawesome-light.svg#${icon}`}></use>
      </svg>
    </figure>
  )
}

CardIconThumb.displayName = 'Card.IconThumb'

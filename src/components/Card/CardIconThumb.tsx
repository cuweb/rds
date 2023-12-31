export interface CardIconThumbProps {
  icon?: string
  noBg?: boolean
  svgPath?: string
}

export const CardIconThumb = ({ icon, noBg, svgPath }: CardIconThumbProps) => {
  // Check if incoming svgPath uses carleton.ca
  const fontAwesome =
    !svgPath || svgPath.includes('carleton.ca')
      ? 'https://cdn.carleton.ca/rds/assets/graphics/fontawesome-light.svg'
      : svgPath

  // Set classes on icon and wrapping div
  const iconDiv = noBg ? 'w-10 h-10' : 'w-16 h-16 bg-cu-red'
  const iconSvg = noBg ? 'w-10 h-10 fill-cu-red' : 'w-9 h-9 fill-white'

  return (
    <figure className={`flex items-center justify-center mx-6 mt-6 mb-2 overflow-hidden rounded-md ${iconDiv}`}>
      <svg className={iconSvg}>
        <use xlinkHref={`${fontAwesome}fontawesome-light.svg#${icon}`}></use>
      </svg>
    </figure>
  )
}

CardIconThumb.displayName = 'Card.IconThumb'

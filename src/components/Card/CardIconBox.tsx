export interface CardIconBoxProps {
  icon?: string
  noBg?: boolean
}

export const CardIconBox = ({ icon, noBg }: CardIconBoxProps) => {
  const iconDiv = noBg ? 'w-14 h-14 bg-transparent' : 'w-16 h-16 bg-cu-red'
  const iconSvg = noBg ? 'w-14 h-14 fill-cu-red' : 'w-10 h-10 fill-white'

  return (
    <div className={`flex items-center justify-center mx-6 mt-6 mb-2 overflow-hidden rounded-md ${iconDiv}`}>
      <svg className={iconSvg}>
        <use xlinkHref={`./assets/fontawesome/light.svg#${icon}`}></use>
      </svg>
    </div>
  )
}

CardIconBox.displayName = 'Card.IconBox'

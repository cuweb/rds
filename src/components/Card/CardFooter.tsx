export interface CardFooterProps {
  children: React.ReactNode
  isType?: 'button' | 'badge'
  buttonType?: 'solid' | 'outline'
  buttonStyle?: 'red' | 'white' | 'dark-grey' | 'grey'
}

export const CardFooter = ({ children, isType, buttonType = 'solid', buttonStyle = 'red' }: CardFooterProps) => {
  // If button set classes
  const buttonClass = isType === 'button' ? `cu-card-button` : ''
  const buttonTypeClass = isType === 'button' && buttonType ? `cu-card-button-${buttonType}` : 'cu-card-button-solid'
  const buttonStyleClass = isType === 'button' && buttonStyle ? `cu-card-button-${buttonStyle}` : 'cu-card-button-red'

  return (
    <footer className={`px-6 pt-3 mt-auto text-white md:pt-5 ${buttonClass} ${buttonStyleClass} ${buttonTypeClass}`}>
      {children}
    </footer>
  )
}

CardFooter.displayName = 'Card.Footer'

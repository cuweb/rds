export interface ListingFooterProps {
  children: React.ReactNode
  isType?: 'button' | 'badge'
  buttonType?: 'solid' | 'outline'
  buttonStyle?: 'red' | 'white' | 'dark-grey' | 'grey'
}

export const ListingFooter = ({ children, isType, buttonType = 'solid', buttonStyle = 'red' }: ListingFooterProps) => {
  const buttonClass = isType === 'button' ? `cu-card-button` : ''
  const buttonTypeClass = isType === 'button' && buttonType ? `cu-card-button-${buttonType}` : 'cu-card-button-solid'
  const buttonStyleClass = isType === 'button' && buttonStyle ? `cu-card-button-${buttonStyle}` : 'cu-card-button-red'

  return (
    <footer className={`mt-auto text-white pt-5 ${buttonClass} ${buttonStyleClass} ${buttonTypeClass}`}>
      {children}
    </footer>
  )
}

ListingFooter.displayName = 'Listing.Footer'

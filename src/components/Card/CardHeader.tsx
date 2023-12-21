export interface CardHeaderProps {
  children: React.ReactNode
  as?: 'h2' | 'h3'
}

export const headerStyles = {
  header: `text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8`,
}

export const CardHeader = ({ children, as = 'h2' }: CardHeaderProps) => {
  const HeaderComponent = as

  return (
    <header>
      <HeaderComponent className={headerStyles.header}>{children}</HeaderComponent>
    </header>
  )
}

CardHeader.displayName = 'Card.Header'

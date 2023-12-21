export interface CardHeaderProps {
  children: React.ReactNode
  as?: 'h2' | 'h3'
}

export const styles = {
  header: `text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8`,
}

export const CardHeader = ({ children, as = 'h2' }: CardHeaderProps) => {
  const HeaderComponent = as

  return (
    <header>
      <HeaderComponent className={styles.header}>{children}</HeaderComponent>
    </header>
  )
}

CardHeader.displayName = 'Card.Header'

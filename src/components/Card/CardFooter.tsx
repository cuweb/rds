export interface CardFooterProps {
  children: React.ReactNode
}

export const footerStyles = {
  footer: `mt-auto pt-4 md:pt-8`,
}

export const CardFooter = ({ children }: CardFooterProps) => {
  return <footer className={footerStyles.footer}>{children}</footer>
}

CardFooter.displayName = 'Card.Footer'

export interface CardFooterProps {
  children: React.ReactNode
}

export const footerStyles = {
  footer: ``,
}

export const CardFooter = ({ children }: CardFooterProps) => {
  return <footer className="px-6 pt-3 mt-auto text-white md:pt-5">{children}</footer>
}

CardFooter.displayName = 'Card.Footer'

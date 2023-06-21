import { figureStyles } from './Card.Styles'

export interface CardInitialsProps {
  initials: string
}

export const CardInitials = ({ initials }: CardInitialsProps) => {
  return (
    <figure className={`cu-figure cu-figure--round ${figureStyles.round} ${figureStyles.figure}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none">
        <path fill="#F2F2F2" d="M0 0h200v200H0z" />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform pt-7 text-2xl text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl">
        {initials}
      </div>
    </figure>
  )
}

CardInitials.displayName = 'Card.Initials'

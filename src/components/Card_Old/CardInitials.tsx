import { figureStyles } from './Card.Styles'

export interface CardInitialsProps {
  initials: string
}

export const CardInitials = ({ initials }: CardInitialsProps) => {
  return (
    <figure className={`cu-figure cu-figure--round ${figureStyles.round} ${figureStyles.figure}`}>
      <div className="relative">
        <img
          src="https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg"
          alt="Background grey"
          width="200"
          height="200"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-cu-black-50 text-2xl text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl">
          {initials}
        </div>
      </div>
    </figure>
  )
}

CardInitials.displayName = 'Card.Initials'

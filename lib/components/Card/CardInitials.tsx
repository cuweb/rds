export interface CardInitialsProps {
  initials: string
}

const styles = {
  figure: `relative`,
  round: `pt-8 pb-2 px-6`,
}

export const CardInitials = ({ initials }: CardInitialsProps) => {
  return (
    <figure className={`cu-figure--round ${styles.round} ${styles.figure}`}>
      <div className="relative">
        <img
          src="https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg"
          alt="Background grey"
          width="200"
          height="200"
        />
        <div className="absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-cu-black-50 text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl">
          {initials}
        </div>
      </div>
    </figure>
  )
}

CardInitials.displayName = 'Card.Initials'

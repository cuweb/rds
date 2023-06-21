import { figureStyles } from './Listing.Styles'

export interface ListingInitialsProps {
  initials: string
}

export const ListingInitials = ({ initials }: ListingInitialsProps) => {
  return (
    <figure className={`cu-figure ${figureStyles.figure} ${figureStyles['small']}`}>
      <div className="relative">
        <img
          src="https://cu-production.s3.amazonaws.com/rds/assets/grey-bg.jpg"
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

ListingInitials.displayName = 'Listing.Initials'

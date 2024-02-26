export interface ListingInitialsProps {
  initials: string
}

export const ListingInitials = ({ initials }: ListingInitialsProps) => {
  return (
    <figure className="cu-figure flex-none rounded-md max-w-[40%] @xl:md:max-w-[25%]">
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

ListingInitials.displayName = 'Listing.Initials'

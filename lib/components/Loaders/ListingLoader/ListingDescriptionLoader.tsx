import { Listing } from '../../Listing/Listing'

interface ListingDescriptionLoaderProps {
  numCol?: number
}

export const ListingDescriptionLoader: React.FC<ListingDescriptionLoaderProps> = ({ numCol = 2 }) => {
  // Render one or two Listing.Body components based on numCol
  const listingBodies = Array.from({ length: numCol }, (_, index) => (
    <Listing.Body key={index}>
      <div className="animate-pulse">
        <div className="flex flex-wrap gap-5">
          <div className="grid flex-auto w-64 gap-3">
            <span className="block h-8 rounded-md w-52 bg-cu-black-100"></span>
            <span className="block h-6 rounded-md w-36 bg-cu-black-100"></span>
            <span className="block h-6 mb-2 rounded-md w-36 bg-cu-black-100"></span>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Listing.Body>
  ))

  return <Listing>{listingBodies}</Listing>
}

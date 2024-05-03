import { Listing } from '../../Listing/Listing'

export const ListingDescriptionLoader = () => {
  return (
    <Listing>
      <Listing.Body>
        <div className="animate-pulse">
          <div className="flex flex-wrap gap-5">
            <span className="h-36 w-36 @4xl:lg:h-32 @4xl:lg:w-32 rounded-md bg-cu-black-100"></span>
            <div className="grid flex-auto w-64 gap-3">
              <span className="block h-8 rounded-md w-52 bg-cu-black-100"></span>
              <span className="block h-6 rounded-md w-36 bg-cu-black-100"></span>
              <span className="block h-6 mb-2 rounded-md w-36 bg-cu-black-100"></span>
            </div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </Listing.Body>
    </Listing>
  )
}

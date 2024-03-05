import { Listing } from '../../Listing/Listing'

export const ListingEventLoader = () => {
  return (
    <Listing>
      <Listing.Body>
        <div className="animate-pulse">
          <div className="flex flex-wrap gap-5">
            <div className="flex-none pb-4 w-20 @4xl:lg:w-32">
              <span className="block rounded-md w-20 h-20 @4xl:lg:h-32 @4xl:lg:w-32 bg-cu-black-100"></span>
            </div>
            <div className="grid flex-auto w-64 gap-3">
              <span className="block h-8 rounded-md w-52 bg-cu-black-100"></span>
              <span className="block h-6 rounded-md w-36 bg-cu-black-100"></span>
              <span className="block h-6 mb-2 rounded-md w-36 bg-cu-black-100"></span>
              <span className="block h-12 mt-auto rounded-md w-28 bg-cu-black-100"></span>
            </div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </Listing.Body>
    </Listing>
  )
}

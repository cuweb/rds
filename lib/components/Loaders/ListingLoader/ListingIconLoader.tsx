import { Listing } from '../../Listing/Listing'

export const ListingIconLoader = () => {
  return (
    <Listing>
      <Listing.Body>
        <div className="animate-pulse">
          <div className="flex flex-wrap">
            <div className="grid flex-auto gap-3">
              <span className="block w-10 h-10 my-3 rounded-md bg-cu-black-100"></span>
              <span className="block w-64 h-8 rounded-md bg-cu-black-100"></span>
              <span className="block w-11/12 h-4 mt-2 rounded-md bg-cu-black-100"></span>
              <span className="block w-8/12 h-4 mb-2 rounded-md bg-cu-black-100"></span>
              <span className="block h-12 mt-auto rounded-md w-28 bg-cu-black-100"></span>
            </div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </Listing.Body>
    </Listing>
  )
}

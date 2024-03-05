import { Listing } from '../../Listing/Listing'

export const ListingPeopleLoader = () => {
  return (
    <Listing>
      <Listing.Body>
        <div className="animate-pulse">
          <div className="flex flex-col @lg:md:flex-row gap-5 h-full">
            <div className="flex-none max-w-[45%] @xl:md:max-w-[25%] aspect-[4/2.7]">
              <span className="block w-full h-full rounded-md bg-cu-black-100"></span>
            </div>
            <div className="flex flex-col flex-1 gap-3">
              <span className="block w-56 h-6 rounded-md bg-cu-black-100"></span>
              <span className="block w-64 h-6 rounded-md bg-cu-black-100"></span>
              <span className="block h-4 rounded-md w-52 bg-cu-black-100"></span>
              <span className="block w-32 h-4 mb-2 rounded-md bg-cu-black-100"></span>
              <span className="block h-12 mt-auto rounded-md w-28 bg-cu-black-100"></span>
            </div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </Listing.Body>
    </Listing>
  )
}

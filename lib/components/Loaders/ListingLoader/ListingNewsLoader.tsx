import { Listing } from '../../Listing/Listing'

export const ListingNewsLoader = () => {
  return (
    <Listing>
      <Listing.Body>
        <div className="animate-pulse">
          <div className="flex flex-col @lg:md:flex-row gap-5 h-full">
            <div className="flex-none max-w-[45%] @xl:md:max-w-[25%] aspect-[4/2.7]">
              <span className="block w-full h-full rounded-md bg-cu-black-100"></span>
            </div>
            <div className="flex flex-col flex-1 gap-3">
              <span className="block h-4 rounded-md max-w-48 bg-cu-black-100"></span>
              <span className="block h-8 rounded-md max-w-80 bg-cu-black-100"></span>
              <span className="block w-full h-16 rounded-md bg-cu-black-100"></span>
              <span className="block h-12 rounded-md max-w-36 bg-cu-black-100"></span>
            </div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </Listing.Body>
    </Listing>
  )
}

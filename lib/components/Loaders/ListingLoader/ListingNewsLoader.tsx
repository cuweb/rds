import { Listing } from '../../Listing/Listing'

export const ListingNewsLoader = () => {
  return (
    <Listing>
      <Listing.Body>
        <span className="block w-[180px] h-24 mb-3 rounded-lg bg-cu-black-100"></span>
        <div className="space-y-3">
          <span className="block w-6/12 h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-10/12 h-6 rounded-md bg-cu-black-100"></span>
          <span className="block w-full h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-full h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-1/3 h-12 mb-6 rounded-md bg-cu-black-100"></span>
        </div>
        <span className="sr-only">Loading...</span>
      </Listing.Body>
    </Listing>
  )
}

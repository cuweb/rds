import { Listing } from '../../Listing/Listing'

export const ListingNewsLoader = () => {
  return (
    <Listing>
      <div className="p-8 text-left animate-pulse justify-items-start">
        <span className="block w-2/4 h-24 mb-3 rounded-lg bg-cu-black-100"></span>
        <div className="space-y-3">
          <span className="block w-6/12 h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-10/12 h-6 rounded-md bg-cu-black-100"></span>
          <span className="block w-full h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-full h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-1/3 h-12 mb-6 rounded-md bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Listing>
  )
}

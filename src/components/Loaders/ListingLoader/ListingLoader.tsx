import { Listing } from '../../../../src/components/Listing/Listing'

export const ListingLoader = () => {
  return (
    <Listing>
      <div className="relative flex flex-col @lg:md:flex-row items-start h-full gap-4 @lg:md:gap-8 p-8 animate-pulse">
        <div className="cu-figure flex-none rounded-md min-w-[35%] max-w-[50%] @lg:md:max-w-[35%]">
          <div className="object-cover w-full h-[100px] @lg:md:h-[180px] bg-cu-black-100 rounded-md"></div>
        </div>
        <div className="flex-1 py-2.5 pr-10 space-y-3 w-full">
          <span className="block w-11/12 h-8 rounded-md bg-cu-black-100"></span>
          <span className="block w-6/12 h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-full h-16 rounded-md bg-cu-black-100"></span>
          <span className="block w-4/12 h-3 -mt-3 rounded-md bg-cu-black-100"></span>
        </div>
      </div>
    </Listing>
  )
}

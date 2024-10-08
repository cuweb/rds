export const PageHeaderPeopleLoader = () => {
  return (
    <>
      <div className="cu-loader-pageheaders cu-component animate-pulse gap-10 max-w-5xl mx-auto">
        <div className="flex w-full md:w-1/3 md:float-right  max-w-[400px]">
          <div className="mt-4 mb-6 bg-cu-black-100 rounded-lg w-72 h-72"></div>
        </div>
        <div className="flex flex-col w-full md:w-2/3">
          <div className=" mt-4 block h-8 bg-cu-black-100  w-2/3 mb-10"></div>

          <div className="space-y-3 mb-4">
            <div className=" block h-4 bg-cu-black-100 rounded w-2/3 "></div>
            <div className=" block h-4 bg-cu-black-100 rounded w-1/3"></div>
            <div className=" block h-4 bg-cu-black-100 rounded w-1/2"></div>
            <div className="block h-4 bg-cu-black-100 rounded w-1/3"></div>
          </div>

          <div className="flex  space-x-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-10 h-10 bg-cu-black-100 rounded-full " />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

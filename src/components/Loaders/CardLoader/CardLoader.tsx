export const CardLoader = () => {
  return (
    <div className="cu-cardloader not-prose max-w-xl overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="animate-pulse bg-white">
        <span className="block h-44 w-full bg-cu-black-100"></span>
        <div className="space-y-3 p-6">
          <span className="block h-4 w-11/12 bg-cu-black-100"></span>
          <span className="block h-4 w-6/12 bg-cu-black-100"></span>
          <span className="block h-16 w-full bg-cu-black-100"></span>
          <span className="-mt-3 block h-4 w-4/12 bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

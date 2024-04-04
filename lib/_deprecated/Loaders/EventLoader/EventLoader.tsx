export const EventLoader = () => {
  return (
    <div role="status" className="cu-eventloader not-prose animate-pulse">
      <div className="mx-auto border-y-2 p-20">
        <div className="mx-auto mb-2.5 h-3 max-w-[640px] rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="mx-auto h-3 max-w-[540px] rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="mt-4 flex items-center justify-center">
          <div className="mr-3 h-3 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-2 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

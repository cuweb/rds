import { Card } from '../../Card/Card'

export const CardEventLoader = () => {
  return (
    <Card>
      <div className="animate-pulse">
        <span className="block w-full rounded-t-lg h-60 bg-cu-black-100"></span>
        <span className="z-10 flex flex-col items-center justify-center w-20 h-20 mx-6 mb-2 -mt-10 bg-white rounded-md"></span>
        <div className="p-6 space-y-3">
          <span className="block w-11/12 h-8 rounded-md bg-cu-black-100"></span>
          <span className="block w-6/12 h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-6/12 h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-4/12 h-16 rounded-md bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Card>
  )
}

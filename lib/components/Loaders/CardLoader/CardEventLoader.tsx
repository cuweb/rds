import { Card } from '../../Card/Card'

export const CardEventLoader = () => {
  return (
    <Card hasShadow="onCard">
      <div className="animate-pulse">
        <span className="block w-full rounded-t-lg h-60 bg-cu-black-100"></span>
        <span className="z-10 flex flex-col items-center justify-center w-20 h-20 mx-6 mb-2 -mt-10 rounded-md bg-cu-black-50"></span>
        <div className="p-6 space-y-3">
          <span className="block h-8 rounded-md max-w-80 bg-cu-black-100"></span>
          <span className="block h-4 rounded-md max-w-48 bg-cu-black-100"></span>
          <span className="block h-4 rounded-md max-w-48 bg-cu-black-100"></span>
          <span className="block h-12 -mt-3 rounded-md max-w-36 bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Card>
  )
}

import { Card } from '../../Card/Card'

export const CardNewsLoader = () => {
  return (
    <Card>
      <div className="animate-pulse">
        <span className="block w-full rounded-t-lg h-60 bg-cu-black-100"></span>
        <div className="p-6 space-y-3">
          <span className="block h-4 rounded-md max-w-48 bg-cu-black-100"></span>
          <span className="block h-8 rounded-md max-w-80 bg-cu-black-100"></span>
          <span className="block w-full h-16 rounded-md bg-cu-black-100"></span>
          <span className="block h-12 -mt-3 rounded-md max-w-36 bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Card>
  )
}

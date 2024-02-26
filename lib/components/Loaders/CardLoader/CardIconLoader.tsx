import { Card } from '../../Card/Card'

export const CardIconLoader = () => {
  return (
    <Card>
      <div className="animate-pulse">
        <div className="p-6 space-y-3">
          <span className="block w-1/6 h-16 rounded-md bg-cu-black-100"></span>
          <span className="block w-8/12 h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-8/12 h-4 rounded-md bg-cu-black-100"></span>
          <span className="block w-4/12 h-8 rounded-md bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Card>
  )
}

import { Card } from '../../Card/Card'

export const CardPageLoader = () => {
  return (
    <Card>
      <div className="animate-pulse">
        <div className="p-6 space-y-3">
          <span className="block w-11/12 h-8 rounded-md bg-cu-black-100"></span>
          <span className="block w-6/12 h-3 rounded-md bg-cu-black-100"></span>
          <span className="block w-full h-16 rounded-md bg-cu-black-100"></span>
          <span className="block w-[120px] h-12 -mt-3 rounded-md bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Card>
  )
}

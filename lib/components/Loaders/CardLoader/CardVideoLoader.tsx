import { Card } from '../../Card/Card'

export const CardVideoLoader = () => {
  return (
    <Card>
      <div className="animate-pulse">
        <span className="block w-full rounded-t-lg h-60 bg-cu-black-100"></span>
        <div className="p-6 space-y-3">
          <span className="block w-10/12 h-6 rounded-md bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Card>
  )
}

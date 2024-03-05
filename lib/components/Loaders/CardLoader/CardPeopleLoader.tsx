import { Card } from '../../Card/Card'

export const CardPeopleLoader = () => {
  return (
    <Card hasShadow="onCard">
      <div className="animate-pulse">
        <div className="flex items-center justify-center pt-6">
          <span className="block w-40 h-40 rounded-full bg-cu-black-100"></span>
        </div>
        <div className="p-6">
          <div className="flex flex-col items-center space-y-2">
            <span className="block w-11/12 h-4 rounded-md bg-cu-black-100"></span>
            <span className="block w-6/12 h-4 rounded-md bg-cu-black-100"></span>
          </div>
          <span className="block w-full h-16 mt-4 rounded-md bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Card>
  )
}

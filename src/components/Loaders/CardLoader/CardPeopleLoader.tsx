import { Card } from '../../Card/Card'

export const CardPeopleLoader = () => {
  return (
    <Card>
      <div className="animate-pulse">
        <div className="flex justify-center pt-6">
          <span className="block w-40 h-40 bg-cu-black-100 rounded-full"></span>
        </div>
        <div className="p-6 ">
          <span className="block w-11/12 h-4 rounded-md bg-cu-black-100 mb-2"></span>
          <span className="block w-6/12 h-4 rounded-md bg-cu-black-100 mb-2"></span>
          <span className="block w-full h-16 rounded-md bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Card>
  )
}

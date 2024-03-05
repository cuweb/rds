import { Card } from '../../Card/Card'

export const CardPeopleLoader = () => {
  return (
    <Card hasShadow="onCard" isCenter>
      <div className="animate-pulse">
        <div className="flex items-center justify-center pt-6">
          <span className="block w-40 h-40 rounded-full bg-cu-black-100"></span>
        </div>
        <div className="flex flex-col items-center justify-center p-6 space-y-3">
          <div className="block w-full h-8 rounded-md max-w-80 bg-cu-black-100 item-center"></div>
          <div className="block w-full h-4 rounded-md max-w-44 bg-cu-black-100"></div>
          <div className="block w-full h-4 rounded-md max-w-52 bg-cu-black-100"></div>
          <div className="block w-full h-4 rounded-md max-w-36 bg-cu-black-100"></div>
          <div className="block w-full h-12 -mt-3 rounded-md max-w-36 bg-cu-black-100"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </Card>
  )
}

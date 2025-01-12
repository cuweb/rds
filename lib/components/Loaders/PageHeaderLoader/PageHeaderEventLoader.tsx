import { ButtonLoader } from '../../../main'

export const PageHeaderEventLoader = () => {
  return (
    <>
      <div className="cu-loader cu-loader--pageheaders cu-component-updated animate-pulse gap-10 max-w-5xl mx-auto">
        <div className="flex w-full md:w-1/3 md:float-right  max-w-[400px]">
          <div className="mt-4 mb-6 bg-cu-black-100 rounded-lg w-96 h-80"></div>
        </div>
        <div className="flex flex-col w-full md:w-2/3">
          <div className=" mt-4 block h-14 bg-cu-black-100  w-5/6 mb-10"></div>

          <div className="space-y-3 mb-12">
            <div className=" block h-4 bg-cu-black-100 rounded w-1/4 "></div>
            <div className=" block h-4 bg-cu-black-100 rounded w-1/2"></div>
            <div className=" block h-4 bg-cu-black-100 rounded w-2/6"></div>
            <div className="block h-4 bg-cu-black-100 rounded w-2/3"></div>
          </div>
          <div className="space-y-3 mb-4">
            <div className=" block h-4 bg-cu-black-100 rounded w-1/4 "></div>
            <div className="block h-4 bg-cu-black-100 rounded w-5/6"></div>
          </div>

          <ButtonLoader number={2} isSmall={false} />
        </div>
      </div>
    </>
  )
}

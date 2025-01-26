import { gridColsClass } from '../../../helpers/optionClasses'

interface BlockLoaderProps {
  height: number
  cols: 1 | 2 | 3 | 4 | '1/3' | '2/3'
}

export const BlockLoader = ({ height = 100, cols = 1 }: BlockLoaderProps) => {
  const gridSpacing = cols ? gridColsClass[cols] : 'space-y-5'
  return (
    <div className={`cu-loader cu-loader--block cu-component-updated grid ${gridSpacing} gap-5 items-start`}>
      <div className={`block rounded-md w-full bg-cu-black-100`} style={{ height: height + 'px' }}></div>
    </div>
  )
}

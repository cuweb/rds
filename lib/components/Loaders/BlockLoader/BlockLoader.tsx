interface BlockLoaderProps {
  height: number
  cols: number | string
}

interface IGridColsClass {
  [key: string | number]: string
}

const gridColsClass: IGridColsClass = {
  1: 'grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
  '1/3': 'lg:grid-cols-3 lg:[&>*:last-child]:col-span-2',
  '2/3': 'lg:grid-cols-3 lg:[&>*:first-child]:col-span-2',
}

export const BlockLoader = ({ height = 100, cols = 1 }: BlockLoaderProps) => {
  const gridSpacing = cols ? gridColsClass[cols] : 'space-y-5'
  return (
    <div className={`grid ${gridSpacing} gap-5 items-start`}>
      <div className={`block rounded-md w-full bg-cu-black-100`} style={{ height: height + 'px' }}></div>
    </div>
  )
}

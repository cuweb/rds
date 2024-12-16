// TODO: this is out of sync with propClasses
export const maxWidthClasses = {
  sm: 'max-w-xs',
  md: 'max-w-xl',
  lg: 'max-w-4xl',
  xl: 'max-w-7xl',
}
export interface IGridColsClass {
  [key: string | number]: string
}

export const gridColsClass = {
  1: 'grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
  '1/3': 'lg:grid-cols-3 lg:[&>*:last-child]:col-span-2',
  '2/3': 'lg:grid-cols-3 lg:[&>*:first-child]:col-span-2',
}

export const colSpanClass = {
  '1': 'md:col-span-1',
  '2': 'md:col-span-2',
  '3': 'md:col-span-3',
  '4': 'md:col-span-4',
}

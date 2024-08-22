import { ImageGridImage } from './ImageGridImage'
import { gridColumnClasses, gridGapClasses, maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses
type gridColumnKeys = keyof typeof gridColumnClasses
type gridGapKeys = keyof typeof gridGapClasses

export interface ImageGridProps {
  children: React.ReactNode
  maxWidth?: maxWidthKeys
  cols?: gridColumnKeys
  gridGap?: gridGapKeys
}

export const ImageGridWrapper = ({ children, maxWidth = '5xl', gridGap = '5', cols = '3' }: ImageGridProps) => {
  return (
    <div
      className={`cu-imagegrid cu-imagegrid-${cols} cu-component grid
        ${gridColumnClasses[cols]}
        ${maxWidthClasses[maxWidth]} ${gridGapClasses[gridGap]}
      `}
    >
      {children}
    </div>
  )
}

export const ImageGrid = Object.assign(ImageGridWrapper, {
  Image: ImageGridImage,
})

ImageGridWrapper.displayName = 'ImageGrid'

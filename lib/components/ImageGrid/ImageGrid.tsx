import { ImageGridItem } from './ImageGridItem'
import { rdsGridColumns, rdsGridSpacing, rdsMaxWidth } from '../../utils/optionClasses'

export interface ImageGridProps {
  children: React.ReactNode
  maxWidth?: '5xl' | '7xl'
  gridGap?: '0' | '5' | '10'
  cols?: '2' | '3' | '4'
}

export const ImageGridWrapper = ({ children, maxWidth = '5xl', gridGap = '5', cols = '3' }: ImageGridProps) => {
  return (
    <div
      className={`cu-imagegrid cu-imagegrid-${cols} grid
        ${rdsGridColumns[cols]}
        ${rdsMaxWidth[maxWidth]} ${rdsGridSpacing[gridGap]}
      `}
    >
      {children}
    </div>
  )
}

export const ImageGrid = Object.assign(ImageGridWrapper, {
  Item: ImageGridItem,
})

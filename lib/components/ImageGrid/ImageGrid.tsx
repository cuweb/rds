import { ImageGridCaption } from './ImageGridCaption'
import { rdsGridColumns, rdsGridSpacing, rdsMaxWidth } from '../../utils/optionClasses'

export interface ImageGridProps {
  children: React.ReactNode
  maxWidth?: '5xl' | '7xl'
  gridGap?: '0' | '5' | '10'
  cols?: '2' | '3' | '4'
}

export const ImageGridWrapper = ({ children, maxWidth = '5xl', gridGap = '5', cols = '4' }: ImageGridProps) => {
  return (
    <div
      className={`cu-imagegrid grid
        ${rdsGridColumns[cols]}
        ${rdsMaxWidth[maxWidth]} ${rdsGridSpacing[gridGap]}
      `}
    >
      <img src="./sample-imgs/news-img.jpg" alt="test" />
      <img src="./sample-imgs/news-img.jpg" alt="test" />
      <img src="./sample-imgs/news-img.jpg" className="cu-imagegrid-span-2-col cu-imagegrid-span-2-row" alt="test" />
      <img src="./sample-imgs/news-img.jpg" alt="test" />
      <img src="./sample-imgs/news-img.jpg" alt="test" />
      <img src="./sample-imgs/news-img.jpg" alt="test" />
      <img src="./sample-imgs/news-img.jpg" alt="test" />
      <img src="./sample-imgs/news-img.jpg" alt="test" />
      <img src="./sample-imgs/news-img.jpg" alt="test" />
    </div>
  )
}

export const ImageGrid = Object.assign(ImageGridWrapper, {
  Caption: ImageGridCaption,
})

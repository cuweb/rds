import { aspectRatioClasses } from '../../utils/propClasses'
import { ImageCaptionOverlay } from '../ImageCaptionOverlay/ImageCaptionOverlay'

type aspectRatioKeys = keyof typeof aspectRatioClasses

export interface ImageSliderItemProps {
  imageUrl: string
  focalPointX?: number
  focalPointY?: number
  title?: string
  link?: string
  aspectRatio?: aspectRatioKeys
}

export const ImageSliderItem = ({
  imageUrl,
  focalPointX = 50,
  focalPointY = 50,
  title,
  link,
  aspectRatio = 'landscape',
}: ImageSliderItemProps) => {
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  return (
    <div className="cu-slider--item pr-4">
      <div
        className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]} bg-cover bg-center rounded-lg bg-black w-full h-full transition ease-in-out duration-[5000]`}
        style={inlineImageStyles}
      >
        {title && <ImageCaptionOverlay title={title} link={link} />}
      </div>
    </div>
  )
}

ImageSliderItem.displayName = 'ImageSlider.Item'

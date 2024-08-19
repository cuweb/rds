import { borderWidthClasses } from '../../utils/propClasses'

type borderWidthKeys = keyof typeof borderWidthClasses

export interface TextMediaBgImgProps {
  imageUrl: string
  imageZoom?: number
  focalPointX?: string
  focalPointY?: string
  border?: borderWidthKeys
}

export const TextMediaBgImg = ({
  imageUrl,
  imageZoom = 0,
  focalPointX = '50',
  focalPointY = '50',
  border = 'none',
}: TextMediaBgImgProps) => {
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    transform: `scale(1.${imageZoom})`,
  }

  return (
    <div
      className={`cu-textmedia-bgimg not-prose flex-1 rounded-lg bg-no-repeat bg-cover border-solid border-white ${borderWidthClasses[border]}`}
      style={inlineImageStyles}
    />
  )
}

TextMediaBgImg.displayName = 'TextMedia.BgImage'

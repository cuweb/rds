export interface TextMediaBgImgProps {
  imageUrl: string
  imageZoom?: number
  focalPointX?: number
  focalPointY?: number
  hasBorder?: boolean
}

export const TextMediaBgImg = ({
  imageUrl,
  imageZoom = 0,
  focalPointX = 50,
  focalPointY = 50,
  hasBorder = false,
}: TextMediaBgImgProps) => {
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    transform: `scale(1.${imageZoom})`,
  }

  const imageBorder = hasBorder ? `border-8 border-solid border-white bg-white` : ''

  return (
    <div
      className={`cu-textmedia-bgimg flex-1 rounded-xl bg-no-repeat bg-cover ${imageBorder}`}
      style={inlineImageStyles}
    />
  )
}

TextMediaBgImg.displayName = 'TextMedia.BgImage'

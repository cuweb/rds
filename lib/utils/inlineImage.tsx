export const getInlineStyle = (image: string, focalPointX: number, focalPointY: number) => ({
  backgroundImage: `url(${image})`,
  backgroundPosition: `${focalPointX}% ${focalPointY}%`,
})

export const getOpacityStyle = (opacity: number) => ({
  opacity: `0.${opacity}`,
})

export const getImageStyles = (isType: string, image: string | undefined) => {
  if (image && isType === 'image') return 'relative bg-opacity-50 bg-cover bg-cu-black-50'
  return isType === 'dark' ? 'bg-cu-black-900' : 'bg-cu-black-50'
}

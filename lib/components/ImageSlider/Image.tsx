import { aspectRatioClasses } from '../../utils/propClasses'
import { useLinkContext } from '../LinkProvider/useLinkContext'

type aspectRatioKeys = keyof typeof aspectRatioClasses

export interface ImageProps {
  imageUrl: string
  focalPointX?: number
  focalPointY?: number
  title?: string
  link?: string
  aspectRatio?: aspectRatioKeys
}

export const Image = ({
  imageUrl,
  focalPointX = 50,
  focalPointY = 50,
  title,
  link,
  aspectRatio = 'landscape',
}: ImageProps) => {
  const LinkComponent = useLinkContext()
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  return (
    <div
      className={`relative ${aspectRatioClasses[aspectRatio]} bg-cover bg-center rounded-lg bg-black w-full h-full transition-[width] duration-[5000] ease-in-out`}
      style={inlineImageStyles}
    >
      {title && (
        <div
          className={`bg-black/75 text-white absolute bottom-2 left-2 right-2 px-4 py-2.5 rounded-md ${link ? 'hover:bg-cu-red/85' : ''}`}
        >
          {link ? (
            <LinkComponent href={link} className="cursor-pointer block hover-bg-cu-red">
              <p className="text-sm md:text-base font-semibold line-clamp-2">{title}</p>
            </LinkComponent>
          ) : (
            <p className="text-sm md:text-base font-semibold line-clamp-2">{title}</p>
          )}
        </div>
      )}
    </div>
  )
}

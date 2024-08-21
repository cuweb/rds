import { PageHeader } from '../PageHeader/PageHeader'
import { justifyContentClasses } from '../../utils/propClasses'

type justifyContentKeys = keyof typeof justifyContentClasses

const opacityValues = Array.from({ length: 21 }, (_, index) => 60 + index)

export interface FullBannerProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  title: string
  image?: string
  focalPointX?: string
  focalPointY?: string
  justify?: justifyContentKeys
  opacity?: (typeof opacityValues)[number]
}

// Used in WideImage, make a helper function when moving this component into RDS
const getBackgroundImageStyles = (image: string = '', focalPointX: string, focalPointY: string) => ({
  backgroundImage: `url(${image})`,
  backgroundPosition: `${focalPointX}% ${focalPointY}%`,
})

export const FullBanner = ({
  children,
  as = 'section',
  title,
  image,
  focalPointX = '50',
  focalPointY = '50',
  opacity = 70,
  justify = 'start',
}: FullBannerProps) => {
  if (!opacityValues.includes(opacity)) {
    console.warn(`Invalid opacity value: ${opacity}. It should be one of ${opacityValues.join(', ')}.`)
  }

  const FullBannerComponent = as
  const inlineStyle = getBackgroundImageStyles(image, focalPointX, focalPointY)
  const opacityStyle = {
    opacity: `0.${opacity}`,
  }
  const contentAlign = justify === 'center' ? 'text-center [&>*]:justify-center' : ''

  // TODO: change negative top margin to be only if FullBanner is first block inside main
  return (
    <FullBannerComponent
      className={`cu-fullbanner cu-fullbanner--${justify} cu-no-browsers-edge not-contained overflow-hidden bg-cu-black-200 bg-cover mb-6 pt-80 pb-0 md:pt-48 md:pb-12 lg:pt-64 lg:pb-24 xl:pt-96 xl:pb-36 px-0 md:px-10`}
      style={inlineStyle}
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className={`flex ${justifyContentClasses[justify]}`}>
          <div
            className={`relative overflow-hidden w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:rounded-lg ${contentAlign}`}
          >
            <div className="relative z-10 px-4 md:px-8 pt-3 pb-5 md:pt-6 md:pb-8">
              <PageHeader header={title} as="h1" size="md" noUnderline />
              {children}
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black" style={opacityStyle}></div>
          </div>
        </div>
      </div>
    </FullBannerComponent>
  )
}

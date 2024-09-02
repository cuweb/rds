import { PageHeader } from '../PageHeader/PageHeader'
import { justifyContentClasses } from '../../utils/propClasses'

type justifyContentKeys = keyof typeof justifyContentClasses

const opacityValues = Array.from({ length: 21 }, (_, index) => 60 + index)

export interface FullBannerProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  title: string
  headerType?: 'h1' | 'h2'
  image?: string
  focalPointX?: number
  focalPointY?: number
  justify?: justifyContentKeys
  opacity?: (typeof opacityValues)[number]
}

// Used in WideImage, make a helper function when moving this component into RDS
const getBackgroundImageStyles = (image: string = '', focalPointX: number, focalPointY: number) => ({
  backgroundImage: `url(${image})`,
  backgroundPosition: `${focalPointX}% ${focalPointY}%`,
})

export const FullBanner = ({
  children,
  as = 'section',
  title,
  headerType = 'h1',
  image,
  focalPointX = 50,
  focalPointY = 50,
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

  return (
    <FullBannerComponent
      className={`cu-fullbanner cu-fullbanner--${justify} cu-component cu-no-browsers-edge cu-prose cu-prose-light not-contained overflow-hidden bg-cu-black-200 bg-cover mb-6 pt-80 pb-0 md:pt-48 md:pb-12 lg:pt-64 lg:pb-24 xl:pt-96 xl:pb-36 px-0 md:px-10`}
      style={inlineStyle}
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className={`flex ${justifyContentClasses[justify]}`}>
          <div
            className={`relative overflow-hidden min-w-[420px] md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:rounded-lg ${contentAlign}`}
          >
            <div className="relative z-10 px-5 md:px-8 pt-3 pb-5 md:pt-6 md:pb-8">
              <PageHeader header={title} as={headerType} size={headerType === 'h1' ? 'md' : 'sm'} noUnderline isWhite>
                {children}
              </PageHeader>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black" style={opacityStyle}></div>
          </div>
        </div>
      </div>
    </FullBannerComponent>
  )
}

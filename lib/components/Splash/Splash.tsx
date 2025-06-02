import { getInlineStyle } from '../../utils/inlineImage'
import { useLinkContext } from '../LinkProvider/useLinkContext'
import { PageHeader } from '../PageHeader/PageHeader'

const opacityValues = Array.from({ length: 21 }, (_, index) => 60 + index)

export interface SplashProps {
  image?: string
  opacity?: (typeof opacityValues)[number]
  focalPointX?: number
  focalPointY?: number
  video?: string
  eyebrow?: string
  header: string
  contentType?: 'button' | 'cards'
  children?: React.ReactNode
}

export const SplashWrapper = ({
  image,
  opacity = 70,
  focalPointX = 50,
  focalPointY = 50,
  eyebrow,
  header,
  contentType,
  children,
}: SplashProps) => {
  const LinkComponent = useLinkContext()

  if (!opacityValues.includes(opacity)) {
    console.warn(`Invalid opacity value: ${opacity}. It should be one of ${opacityValues.join(', ')}.`)
  }

  const inlineStyle = image ? getInlineStyle(image, focalPointX, focalPointY) : undefined

  const paddingX = 'px-4 sm:px-24'
  const paddingY = 'py-10 sm:pt-20 sm:pb-5'

  return (
    <section
      className={`cu-splash w-screen ml-offset-center bg-cu-black-900 text-white relative bg-cover bg-no-repeat bg-center ${paddingX} ${paddingY}`}
      style={image ? inlineStyle : undefined}
    >
      <div className={`relative z-20 flex flex-col items-center gap-12 sm:gap-20`}>
        <LinkComponent href="https://goravens.carleton.ca" className="inline-block">
          <img
            className="w-24 h-auto"
            src="https://cu-production.s3.amazonaws.com/rds/assets/ravens-logos/ravens-logo-wordmark.svg"
            alt="Carleton"
          />
        </LinkComponent>
        <div className="flex flex-col items-center w-full gap-4">
          <PageHeader eyebrow={eyebrow} header={header} isWhite isCenter noUnderline></PageHeader>
          <div className={`w-full ${contentType !== 'button' ? 'sm:!mt-52' : 'sm:mb-60'} mb-0`}>{children}</div>
        </div>
      </div>
      <div
        className={`absolute z-10 inset-0 w-full h-full bg-gradient-to-t from-cu-black-900 from-15% to-cu-black/0`}
      ></div>
    </section>
  )
}

export const Splash = Object.assign(SplashWrapper)

SplashWrapper.displayName = 'Splash'

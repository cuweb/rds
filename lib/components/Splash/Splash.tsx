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
  children?: React.ReactNode
}

export const SplashWrapper = ({
  image,
  opacity = 70,
  focalPointX = 50,
  focalPointY = 50,
  eyebrow,
  header,
  children,
}: SplashProps) => {
  const LinkComponent = useLinkContext()

  if (!opacityValues.includes(opacity)) {
    console.warn(`Invalid opacity value: ${opacity}. It should be one of ${opacityValues.join(', ')}.`)
  }

  const inlineStyle = image ? getInlineStyle(image, focalPointX, focalPointY) : undefined

  return (
    <section
      className={`cu-splash w-screen ml-offset-center bg-cu-black-900 text-white relative pt-10 px-5 pb-60`}
      style={image ? inlineStyle : undefined}
    >
      <div className={`relative z-20 flex flex-col items-center gap-20`}>
        <LinkComponent href="https://goravens.carleton.ca" className="inline-block mt-8">
          <img
            className="w-24 h-auto"
            src="https://cu-production.s3.amazonaws.com/rds/assets/ravens-logos/ravens-logo-wordmark.svg"
            alt="Carleton"
          />
        </LinkComponent>
        <div className="flex flex-col items-center">
          <PageHeader eyebrow={eyebrow} header={header} isWhite isCenter noUnderline></PageHeader>
          {children}
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

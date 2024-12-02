import { justifyContentClasses, bgOpacityClasses } from '../../utils/propClasses'
import { PageHeader } from '../PageHeader/PageHeader'

type justifyContentKeys = keyof typeof justifyContentClasses
type bgOpacityKeys = keyof typeof bgOpacityClasses

export interface FullBannerProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  title: string
  headerType?: 'h1' | 'h2'
  image?: string
  justify?: justifyContentKeys
  opacity?: bgOpacityKeys
}

export const FullBanner = ({
  children,
  as = 'section',
  title,
  headerType = 'h1',
  image,
  opacity = 70,
  justify = 'start',
}: FullBannerProps) => {
  const FullBannerComponent = as

  return (
    <FullBannerComponent
      className={`cu-fullbanner cu-component bg-cu-black-900 relative cu-no-browsers-edge not-prose not-contained`}
    >
      {image && (
        <div className="relative">
          <img src={image} className="rounded-none w-full h-auto" />
        </div>
      )}

      <div className="lg:absolute lg:bottom-8 xl:bottom-12 w-full px-8 md:px-10">
        <div className={`max-w-screen-2xl mx-auto flex ${justifyContentClasses[justify]}`}>
          <div
            className={`w-full lg:max-w-2xl bg-cu-black-900 ${bgOpacityClasses[opacity]} lg:px-8 pt-3 pb-5 lg:pt-6 lg:pb-8 rounded-lg text-white`}
          >
            <PageHeader header={title} as={headerType} size={headerType === 'h1' ? 'md' : 'sm'} noUnderline isWhite>
              {children}
            </PageHeader>
          </div>
        </div>
      </div>
    </FullBannerComponent>
  )
}

import { FullBannerContent } from './FullBannerContent'
import { FullBannerImage } from './FullBannerImage'
import { FullBannerVideo } from './FullBannerVideo'

export interface FullBannerProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
}

export const FullBannerWrapper = ({ children, as = 'section' }: FullBannerProps) => {
  const FullBannerComponent = as

  return (
    <FullBannerComponent
      className={`cu-fullbanner cu-component bg-cu-black-900 relative cu-no-browsers-edge not-prose not-contained`}
    >
      {children}
    </FullBannerComponent>
  )
}

export const FullBanner = Object.assign(FullBannerWrapper, {
  Content: FullBannerContent,
  Image: FullBannerImage,
  Video: FullBannerVideo,
})

FullBannerWrapper.displayName = 'FullBanner'

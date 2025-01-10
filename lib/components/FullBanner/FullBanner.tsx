import { FullBannerContent } from './FullBannerContent'
import { FullBannerImage } from './FullBannerImage'

export interface FullBannerProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
}

export const FullBannerWrapper = ({ children, as = 'section' }: FullBannerProps) => {
  const FullBannerComponent = as

  return (
    <FullBannerComponent
      className={`cu-fullbanner bg-cu-black-900 relative cu-no-browsers-edge not-prose not-contained`}
    >
      {children}
    </FullBannerComponent>
  )
}

export const FullBanner = Object.assign(FullBannerWrapper, {
  Content: FullBannerContent,
  Image: FullBannerImage,
})

FullBannerWrapper.displayName = 'FullBanner'

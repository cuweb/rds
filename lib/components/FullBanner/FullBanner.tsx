import { FullBannerContent } from './FullBannerContent'
import { FullBannerImage } from './FullBannerImage'
import { FullBannerVideo } from './FullBannerVideo'

export interface FullBannerProps {
  children?: React.ReactNode
}

export const FullBannerWrapper = ({ children }: FullBannerProps) => {
  // TODO GLOBAL: break out of main width
  const $breakoutMaxWidth = `w-screen ml-offset-center`

  return <section className={`cu-fullbanner bg-cu-black-900 relative ${$breakoutMaxWidth}`}>{children}</section>
}

export const FullBanner = Object.assign(FullBannerWrapper, {
  Content: FullBannerContent,
  Image: FullBannerImage,
  Video: FullBannerVideo,
})

FullBannerWrapper.displayName = 'FullBanner'

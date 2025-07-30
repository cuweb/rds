import { FullBannerContent } from './FullBannerContent'
import { FullBannerImage } from './FullBannerImage'
import { FullBannerVideo } from './FullBannerVideo'

export interface FullBannerProps {
  children?: React.ReactNode
}

export const FullBannerWrapper = ({ children }: FullBannerProps) => {
  return <section className={`cu-fullbanner bg-cu-black-900 relative w-screen ml-offset-center`}>{children}</section>
}

export const FullBanner = Object.assign(FullBannerWrapper, {
  Content: FullBannerContent,
  Image: FullBannerImage,
  Video: FullBannerVideo,
})

FullBannerWrapper.displayName = 'FullBanner'

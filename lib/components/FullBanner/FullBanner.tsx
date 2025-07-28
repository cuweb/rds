import { FullBannerContent } from './FullBannerContent'
import { FullBannerImage } from './FullBannerImage'
import { FullBannerVideo } from './FullBannerVideo'

export interface FullBannerProps {
  children?: React.ReactNode
  contained?: boolean
}

export const FullBannerWrapper = ({ children, contained = false }: FullBannerProps) => {
  // TODO GLOBAL: break out of main width
  const $breakoutMaxWidth = contained
    ? `max-w-screen-lg mx-auto rounded-xl overflow-hidden`
    : `w-screen ml-offset-center`

  return <section className={`cu-fullbanner bg-cu-black-900 relative ${$breakoutMaxWidth}`}>{children}</section>
}

export const FullBanner = Object.assign(FullBannerWrapper, {
  Content: FullBannerContent,
  Image: FullBannerImage,
  Video: FullBannerVideo,
})

FullBannerWrapper.displayName = 'FullBanner'

import { FullBannerContent } from './FullBannerContent'
import { FullBannerImage } from './FullBannerImage'
import { FullBannerVideo } from './FullBannerVideo'

export interface FullBannerProps {
  children?: React.ReactNode
  contained?: boolean
}

export const FullBannerWrapper = ({ children, contained = false }: FullBannerProps) => {
  const CONTAINED_STYLES = `max-w-screen-lg mx-auto rounded-xl overflow-hidden`
  const NON_CONTAINED_STYLES = `w-screen ml-offset-center`
  const sectionClasses = contained ? CONTAINED_STYLES : NON_CONTAINED_STYLES

  return <section className={`cu-fullbanner bg-cu-black-900 relative ${sectionClasses}`}>{children}</section>
}

export const FullBanner = Object.assign(FullBannerWrapper, {
  Content: FullBannerContent,
  Image: FullBannerImage,
  Video: FullBannerVideo,
})

FullBannerWrapper.displayName = 'FullBanner'

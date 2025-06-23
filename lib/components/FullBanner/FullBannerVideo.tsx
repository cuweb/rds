import { bannerVideos } from './../../hooks/video/video-names-list'
import { VideoBanner } from '../../hooks/useVideoBanner'

type VideoNameKeys = (typeof bannerVideos)[number]['name']

export interface FullBannerVideoProps {
  videoName?: VideoNameKeys
}

export const FullBannerVideo: React.FC<FullBannerVideoProps> = (props) => {
  return <VideoBanner {...props} />
}

FullBannerVideo.displayName = 'FullBanner.Video'

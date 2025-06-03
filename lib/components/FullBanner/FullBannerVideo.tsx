import { videos } from './../../hooks/video/video-names-list'
import { BannerVideo } from '../../hooks/useVideoBanner'

type VideoNameKeys = (typeof videos)[number]['name']

export interface FullBannerVideoProps {
  videoName?: VideoNameKeys
}

export const FullBannerVideo: React.FC<FullBannerVideoProps> = (props) => {
  return <BannerVideo {...props} />
}

FullBannerVideo.displayName = 'FullBanner.Video'

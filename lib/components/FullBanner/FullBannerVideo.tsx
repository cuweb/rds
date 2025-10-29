import { VideoBanner } from '../../hooks/useVideoBanner'
import { videoBanner } from '../../utils/json-lists.js'

type VideoNameKeys = (typeof videoBanner)[number]['name']

export interface FullBannerVideoProps {
  videoName?: VideoNameKeys
}

export const FullBannerVideo: React.FC<FullBannerVideoProps> = (props) => {
  return <VideoBanner {...props} videoType="banner" />
}

FullBannerVideo.displayName = 'FullBanner.Video'

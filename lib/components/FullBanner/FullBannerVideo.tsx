import { VideoBanner, VideoBannerItem } from '../../hooks/useVideoBanner'
import { videoBanner } from '../../utils/json-lists.js'

type VideoNameKeys = (typeof videoBanner)[number]['name']

export interface FullBannerVideoProps {
  videoName?: VideoNameKeys
  videoBannerList?: VideoBannerItem[]
}

export const FullBannerVideo: React.FC<FullBannerVideoProps> = (props) => {
  return <VideoBanner {...props} videoType="banner" videoBannerList={props.videoBannerList} />
}

FullBannerVideo.displayName = 'FullBanner.Video'

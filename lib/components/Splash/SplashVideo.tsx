import { videos } from './../../hooks/video/video-names-list'
import { BannerVideo } from '../../hooks/useVideoBanner'

export interface SplashVideoProps {
  videoName?: (typeof videos)[number]['name']
}

export const SplashVideo = (props: SplashVideoProps) => {
  return <BannerVideo {...props} />
}

SplashVideo.displayName = 'Splash.Video'

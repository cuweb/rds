import { videos } from './../../hooks/video/video-names-list'
import { BannerVideo } from '../../hooks/useVideoBanner'

export interface SplashVideoProps {
  backgroundVideoName?: (typeof videos)[number]['name']
}

export const SplashVideo = ({ backgroundVideoName }: SplashVideoProps) => {
  return <BannerVideo videoName={backgroundVideoName} PlayPause={false} />
}

SplashVideo.displayName = 'Splash.Video'

import { videos } from './../../hooks/video/video-names-list'
import { BannerVideo } from '../../hooks/useVideoBanner'

export interface SplashVideoProps {
  videoName?: (typeof videos)[number]['name']
}

export const SplashVideo = ({ videoName }: SplashVideoProps) => {
  return <BannerVideo videoName={videoName} PlayPause={false} />
}

SplashVideo.displayName = 'Splash.Video'

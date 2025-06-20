import { videos } from './../../hooks/video/video-names-list'
import { VideoBanner } from '../../hooks/useVideoBanner'

export interface SplashVideoProps {
  backgroundVideoName?: (typeof videos)[number]['name']
}

export const SplashVideo = ({ backgroundVideoName }: SplashVideoProps) => {
  return <VideoBanner videoName={backgroundVideoName} showPlayPauseButton={false} />
}

SplashVideo.displayName = 'Splash.Video'

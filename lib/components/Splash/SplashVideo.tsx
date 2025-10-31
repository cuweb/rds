import { VideoBanner } from '../../hooks/useVideoBanner'
import { videoSplash } from '../../utils/json-lists.js'

export interface SplashVideoProps {
  backgroundVideoName?: (typeof videoSplash)[number]['name']
}

export const SplashVideo = ({ backgroundVideoName }: SplashVideoProps) => {
  return <VideoBanner videoName={backgroundVideoName} videoType="splash" showPlayPauseButton={false} />
}

SplashVideo.displayName = 'Splash.Video'

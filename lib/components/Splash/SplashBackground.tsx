import { SplashImage } from './SplashImage'
import { SplashVideo } from './SplashVideo'

export interface SplashBackgroundWithImageProps {
  type: 'image'
  src: string
}

export interface SplashBackgroundWithVideoProps {
  type: 'video'
  videoName: string
}

export const SplashBackground = (props: SplashBackgroundWithImageProps | SplashBackgroundWithVideoProps) => {
  return (
    <div className="absolute w-full h-full top-0 left-0">
      {props.type === 'video' ? (
        <div className="relative w-full h-full">
          <SplashVideo videoName={props.videoName} />
        </div>
      ) : (
        <SplashImage src={props.src} />
      )}
      <div
        className={`absolute z-[9] inset-0 w-full h-full bg-gradient-to-t from-cu-black-900 from-15% to-cu-black/0`}
      ></div>
    </div>
  )
}

SplashBackground.displayName = 'Splash.Background'

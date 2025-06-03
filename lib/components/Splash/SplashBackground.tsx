import { SplashImage } from './SplashImage'
import { SplashVideo } from './SplashVideo'

export type SplashBackgroundProps =
  | { type: 'image'; src: string; videoName?: never }
  | { type: 'video'; videoName: string; src?: never }

export const SplashBackground = (props: SplashBackgroundProps) => {
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

import { SplashImage } from './SplashImage'
import { SplashVideo } from './SplashVideo'

export type SplashBackgroundProps =
  | { backgroundType: 'image'; backgroundImage: string; backgroundVideoName?: never }
  | { backgroundType: 'video'; backgroundImage: never; backgroundVideoName: string; mobileBackgroundImage: string }

export const SplashBackground = (props: SplashBackgroundProps) => {
  return (
    <div className="absolute w-full h-full top-0 left-0">
      {props.backgroundType === 'video' ? (
        <>
          <div className="hidden sm:block relative w-full h-full">
            <SplashVideo backgroundVideoName={props.backgroundVideoName} />
          </div>
          <div className="block sm:hidden">
            <SplashImage backgroundImage={props.mobileBackgroundImage} />
          </div>
        </>
      ) : (
        <SplashImage backgroundImage={props.backgroundImage} />
      )}
      <div
        className={`absolute z-[9] inset-0 w-full h-full bg-gradient-to-t from-cu-black-900 from-15% to-cu-black/0`}
      ></div>
    </div>
  )
}

SplashBackground.displayName = 'Splash.Background'

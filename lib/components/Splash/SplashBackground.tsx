import { SplashImage } from './SplashImage'
import { SplashVideo } from './SplashVideo'

export type SplashBackgroundProps =
  | { backgroundType: 'image'; backgroundImage: string }
  | { backgroundType: 'video'; backgroundVideoName: string; mobileBackgroundImage: string }

export const SplashBackground = (props: SplashBackgroundProps) => {
  return (
    <div className="absolute z-[9] inset-0 w-full h-full no-prose">
      {props.backgroundType === 'video' ? (
        <>
          <div className="hidden sm:block w-full h-full">
            <SplashVideo backgroundVideoName={props.backgroundVideoName} />
          </div>
          <div className="block sm:hidden">
            <SplashImage backgroundImage={props.mobileBackgroundImage} />
          </div>
        </>
      ) : (
        <SplashImage backgroundImage={props.backgroundImage} />
      )}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-cu-black-900 from-15% to-cu-black/0" />
    </div>
  )
}

SplashBackground.displayName = 'Splash.Background'

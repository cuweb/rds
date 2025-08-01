import { SplashImage } from './SplashImage'
import { SplashVideo } from './SplashVideo'
import { bgOpacityClasses } from '../../utils/propClasses'

type bgOpacityKeys = keyof typeof bgOpacityClasses

export type SplashBackgroundProps =
  | { backgroundType: 'image'; backgroundImage: string; opacity?: bgOpacityKeys }
  | { backgroundType: 'video'; backgroundVideoName: string; mobileBackgroundImage: string; opacity?: bgOpacityKeys }

export const SplashBackground = (props: SplashBackgroundProps) => {
  const opacity = props.opacity ?? '70'

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
      <div className={`absolute inset-0 w-full h-full bg-cu-black-900 ${bgOpacityClasses[opacity]}`} />
    </div>
  )
}

SplashBackground.displayName = 'Splash.Background'

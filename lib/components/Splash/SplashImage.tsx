export interface SplashImageProps {
  backgroundImage: string
}

export const SplashImage = ({ backgroundImage }: SplashImageProps) => {
  return <img src={backgroundImage} className="absolute inset-0 w-full !h-full object-cover not-prose" />
}

SplashImage.displayName = 'Splash.Image'

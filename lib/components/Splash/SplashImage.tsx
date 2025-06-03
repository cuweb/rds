export interface SplashImageProps {
  src: string
}

export const SplashImage = ({ src }: SplashImageProps) => {
  return <img src={src} className="absolute inset-0 w-full h-full object-cover" />
}

SplashImage.displayName = 'Splash.Image'

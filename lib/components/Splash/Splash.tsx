import { SplashBackground } from './SplashBackground'
import { SplashContent } from './SplashContent'

export interface SplashProps {
  children?: React.ReactNode
}

export const SplashWrapper = ({ children }: SplashProps) => {
  return (
    <section className={`cu-splash relative w-screen h-auto min-h-screen ml-offset-center bg-cu-black-900 text-white`}>
      {children}
    </section>
  )
}

export const Splash = Object.assign(SplashWrapper, {
  Background: SplashBackground,
  Content: SplashContent,
})

SplashWrapper.displayName = 'Splash'

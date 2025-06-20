import { SplashBackground } from './SplashBackground'
import { SplashContent } from './SplashContent'

export type SplashWrapperProps = {
  children?: React.ReactNode
}

export const SplashWrapper = ({ children }: SplashWrapperProps) => {
  return <section className={`cu-splash relative w-screen min-h-screen bg-cu-black-900 text-white`}>{children}</section>
}

export const Splash = Object.assign(SplashWrapper, {
  Background: SplashBackground,
  Content: SplashContent,
})

SplashWrapper.displayName = 'Splash'

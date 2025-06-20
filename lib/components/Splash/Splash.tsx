import { SplashBackground, SplashBackgroundProps } from './SplashBackground'
import { SplashContent } from './SplashContent'
import { SplashContentProps } from './SplashContent'

type SplashProps = SplashBackgroundProps & SplashContentProps

export const SplashWrapper = ({ logo, preHeader, header, children, contentType, ...bgProps }: SplashProps) => {
  return (
    <section className={`cu-splash relative w-screen min-h-screen bg-cu-black-900 text-white`}>
      <SplashBackground {...bgProps} />
      <SplashContent logo={logo} preHeader={preHeader} header={header} contentType={contentType}>
        {children}
      </SplashContent>
    </section>
  )
}

export const Splash = Object.assign(SplashWrapper)

SplashWrapper.displayName = 'Splash'

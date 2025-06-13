import { SplashBackground, SplashBackgroundProps } from './SplashBackground'
import { SplashContent } from './SplashContent'

export interface SplashBaseProps {
  logo?: 'default' | 'athletics'
  preHeader?: string
  header?: string
  children?: React.ReactNode
}

type SplashProps = SplashBackgroundProps & SplashBaseProps

export const SplashWrapper = ({ logo, preHeader, header, children, ...bgProps }: SplashProps) => {
  return (
    <section className={`cu-splash relative w-screen min-h-screen ml-offset-center bg-cu-black-900 text-white`}>
      <SplashBackground {...bgProps} />
      <SplashContent logo={logo} preHeader={preHeader} header={header} type={bgProps.type}>
        {children}
      </SplashContent>
    </section>
  )
}

export const Splash = Object.assign(SplashWrapper)

SplashWrapper.displayName = 'Splash'

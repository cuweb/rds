import { SplashBackground, SplashBackgroundProps } from './SplashBackground'
import { SplashContent } from './SplashContent'

export interface SplashBaseProps {
  preHeader?: string
  header?: string
  children?: React.ReactNode
}

type SplashProps = SplashBackgroundProps & SplashBaseProps

export const SplashWrapper = ({ preHeader, header, children, ...bgProps }: SplashProps) => {
  return (
    <section className={`cu-splash relative w-screen min-h-screen ml-offset-center bg-cu-black-900 text-white`}>
      <SplashBackground {...bgProps} />
      <SplashContent preHeader={preHeader} header={header} type={bgProps.type}>
        {children}
      </SplashContent>
    </section>
  )
}

export const Splash = Object.assign(SplashWrapper)

SplashWrapper.displayName = 'Splash'

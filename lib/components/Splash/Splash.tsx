import { SplashBackground, SplashBackgroundProps } from './SplashBackground'
import { SplashContent } from './SplashContent'

export interface SplashBaseProps {
  eyebrow?: string
  header?: string
  buttons?: { title: string; href: string; isExternal?: boolean }[]
  children?: React.ReactNode
}

type SplashProps = SplashBackgroundProps & SplashBaseProps

export const SplashWrapper = ({ eyebrow, header, buttons, children, ...bgProps }: SplashProps) => {
  return (
    <section className={`cu-splash relative w-screen min-h-screen ml-offset-center bg-cu-black-900 text-white`}>
      <SplashBackground {...bgProps} />
      <SplashContent eyebrow={eyebrow} header={header} buttons={buttons} type={bgProps.type}>
        {children}
      </SplashContent>
    </section>
  )
}

export const Splash = Object.assign(SplashWrapper)

SplashWrapper.displayName = 'Splash'

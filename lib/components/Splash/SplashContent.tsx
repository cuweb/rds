import { useLinkContext } from '../LinkProvider/useLinkContext'
import { PageHeader } from '../PageHeader/PageHeader'

export interface SplashContentProps {
  eyebrow?: string
  header?: string
  contentType?: 'button' | 'cards'
  children?: React.ReactNode
}

export const SplashContent = ({ eyebrow, header, contentType, children }: SplashContentProps) => {
  const LinkComponent = useLinkContext()

  const paddingX = 'px-4 sm:px-24'
  const paddingY = 'py-10 sm:pt-20 sm:pb-5'

  return (
    <div className={`relative z-20 h-full flex flex-col items-center gap-12 sm:gap-20 ${paddingX} ${paddingY}`}>
      <LinkComponent href="https://goravens.carleton.ca" className="inline-block">
        <img
          className="w-24 h-auto"
          src="https://cu-production.s3.amazonaws.com/rds/assets/ravens-logos/ravens-logo-wordmark.svg"
          alt="Carleton"
        />
      </LinkComponent>
      <div className={`w-full h-full flex flex-col gap-4 items-center justify-between`}>
        {header && <PageHeader eyebrow={eyebrow} header={header} isWhite isCenter noUnderline></PageHeader>}
        <div className={`w-full ${contentType === 'cards' ? 'sm:!mt-56' : ''}`}>{children}</div>
      </div>
    </div>
  )
}

SplashContent.displayName = 'Splash.Content'

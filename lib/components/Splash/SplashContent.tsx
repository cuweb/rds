import PlayPauseButton from '../../hooks/video/PlayPauseButton'
import { PageHeader } from '../PageHeader/PageHeader'

export interface SplashContentProps {
  logo?: 'default' | 'athletics'
  preHeader?: string
  header?: string
  children?: React.ReactNode
  contentType?: 'buttons' | 'cards'
}

export interface SplashBaseProps extends SplashContentProps {
  backgroundType?: 'image' | 'video'
}

export const SplashContent = ({ logo, preHeader, header, contentType, backgroundType, children }: SplashBaseProps) => {
  const paddingX = 'px-4 sm:px-24'
  const paddingY = 'py-14 sm:pt-20 sm:pb-5'

  return (
    <div
      className={`cu-prose-light relative z-20 cu-max-w-child-5xl min-h-screen flex flex-col items-center gap-6 md:gap-12 sm:gap-20 ${paddingX} ${paddingY}`}
    >
      {logo === 'athletics' ? (
        <img
          className="h-auto w-16 md:w-24 sm:w-auto"
          src="https://cu-production.s3.amazonaws.com/rds/assets/ravens-logos/ravens-logo-wordmark.svg"
          alt="Logo of Carleton Athletics"
        />
      ) : (
        <img
          className="h-auto w-24 sm:w-auto"
          src="https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-vertical-outlined.svg"
          alt="Logo of Carleton University"
        />
      )}

      <div className={`w-full h-full flex flex-col gap-12 grow ${contentType === 'buttons' ? 'sm:grow-0' : ''}`}>
        {header && <PageHeader preHeader={preHeader} header={header} isWhite isCenter noUnderline></PageHeader>}
        <div className={`w-full h-full flex flex-col-reverse grow`}>{children}</div>
        {backgroundType === 'video' && (
          <div className="hidden sm:block">
            <PlayPauseButton />
          </div>
        )}
      </div>
    </div>
  )
}

SplashContent.displayName = 'Splash.Content'

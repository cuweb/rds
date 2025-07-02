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
  return (
    <div
      className={`cu-prose-light relative z-20 cu-max-w-child-7xl min-h-screen flex flex-col items-center gap-6 md:gap-12 p-4 md:p-6 lg:p-12`}
    >
      {logo === 'athletics' ? (
        <img
          className="h-auto w-16 md:w-24 cu-no-max-w-children not-prose"
          src="https://cu-production.s3.amazonaws.com/rds/assets/ravens-logos/ravens-logo-wordmark.svg"
          alt="Logo of Carleton Athletics"
        />
      ) : (
        <img
          className="h-auto w-16 md:w-24 cu-no-max-w-children not-prose"
          src="https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-vertical-outlined.svg"
          alt="Logo of Carleton University"
        />
      )}

      <div className={`w-full h-full flex flex-col gap-4 grow ${contentType === 'buttons' ? 'sm:grow-0' : ''}`}>
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

import { PlayPauseButton } from '../../hooks/video/PlayPauseButton'
import { PageHeader } from '../PageHeader/PageHeader'

export interface SplashContentProps {
  logo?: 'default' | 'athletics'
  preHeader?: string
  header?: string
  type: 'video' | 'image'
  children?: React.ReactNode
}

export const SplashContent = ({ logo, preHeader, header, type, children }: SplashContentProps) => {
  const paddingX = 'px-4 sm:px-24'
  const paddingY = 'py-14 sm:pt-20 sm:pb-5'

  return (
    <div
      className={`relative min-h-screen z-20 flex flex-col items-center gap6 md:gap-12 sm:gap-20 ${paddingX} ${paddingY}`}
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

      <div className={`w-full h-full flex flex-col grow gap-4 items-center justify-between sm:justify-between}`}>
        {header && <PageHeader preHeader={preHeader} header={header} isWhite isCenter noUnderline></PageHeader>}
        <div className="w-full flex flex-col grow h-full">
          {type === 'video' && (
            <div
              className={`splash__video-button flex justify-center sm:justify-end mx-auto sm:ms-auto sm:mr-0 mb-4 sm:mb-10`}
            >
              <PlayPauseButton />
            </div>
          )}
          <div className={`${type !== 'video' ? 'mt-auto' : ''} sm:mt-0`}>{children}</div>
        </div>
      </div>
    </div>
  )
}

SplashContent.displayName = 'Splash.Content'

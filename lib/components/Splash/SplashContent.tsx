import { PlayPauseButton } from '../../hooks/video/PlayPauseButton'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { useLinkContext } from '../LinkProvider/useLinkContext'
import { PageHeader } from '../PageHeader/PageHeader'

export interface SplashContentProps {
  eyebrow?: string
  header?: string
  buttons?: { title: string; href: string; isExternal?: boolean }[]
  type: 'video' | 'image'
  children?: React.ReactNode
}

export const SplashContent = ({ eyebrow, header, buttons, type, children }: SplashContentProps) => {
  const LinkComponent = useLinkContext()

  const paddingX = 'px-4 sm:px-24'
  const paddingY = 'py-14 sm:pt-20 sm:pb-5'

  return (
    <div className={`relative z-20 h-full flex flex-col items-center gap-12 sm:gap-20 ${paddingX} ${paddingY}`}>
      <LinkComponent href="https://goravens.carleton.ca" className="inline-block">
        <img
          className="h-auto w-24 sm:w-auto"
          src="https://cu-production.s3.amazonaws.com/rds/assets/ravens-logos/ravens-logo-wordmark.svg"
          alt="Carleton"
        />
      </LinkComponent>
      <div className={`w-full h-full flex flex-col gap-4 items-center justify-between sm:justify-start`}>
        {header && <PageHeader eyebrow={eyebrow} header={header} isWhite isCenter noUnderline></PageHeader>}
        {buttons && (
          <div className={`flex flex-col mt-auto mb-0 ${children ? 'sm:hidden' : ''}`}>
            <ButtonGroup align="center">
              {buttons.map((button, index) => (
                <LinkComponent
                  key={index}
                  href={button.href}
                  className="cu-button cu-button--red"
                  {...(button.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {button.title}
                </LinkComponent>
              ))}
            </ButtonGroup>
          </div>
        )}
        {type === 'video' && (
          <div className="mt-auto ms-auto mr-0">
            <PlayPauseButton />
          </div>
        )}
        {children && <div className={`hidden sm:flex sm:w-full`}>{children}</div>}
      </div>
    </div>
  )
}

SplashContent.displayName = 'Splash.Content'

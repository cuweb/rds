import { PropsWithChildren } from 'react'
import { navLogoTitle } from './TopBar.Styles'

export interface TopBarLogoProps {
  title?: string
  link?: string
}

export const TopBarLogo = ({ children, title, link }: PropsWithChildren<TopBarLogoProps>) => {
  const titleLength = title ? title.length : 0
  const titleLengthStyles = titleLength > 15 ? navLogoTitle.twoLineHeader : navLogoTitle.oneLineHeader

  return (
    <div className={navLogoTitle.logoWrapper}>
      {children}
      {title && link && (
        <h1 className={`${navLogoTitle.siteTitle} ${titleLengthStyles}`}>
          <a href={link}>{title}</a>
        </h1>
      )}
    </div>
  )
}

TopBarLogo.displayName = 'TopBar.Logo'

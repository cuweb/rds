import { navLogo } from './Nav.Styles'

export interface NavLogoProps {
  title?: string
  link?: string
}

export const NavLogo = ({ title, link }: NavLogoProps) => {
  const titleLength = title ? title.length : 0
  const titleLengthStyles = titleLength > 15 ? navLogo.twoLineHeader : navLogo.oneLineHeader

  return (
    <div className={navLogo.logoWrapper}>
      <a href="https://carleton.ca" className={navLogo.cuLogoLink}>
        <img
          className={navLogo.cuLogo}
          src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
          width="130"
          height="35"
          alt="Logo"
        />
        <img
          className={navLogo.cuShield}
          src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
          width="28"
          height="35"
          alt="Logo"
        />
      </a>
      {title && link && (
        <h1 className={`${navLogo.siteTitle} ${titleLengthStyles}`}>
          <a href={link}>{title}</a>
        </h1>
      )}
    </div>
  )
}

NavLogo.displayName = 'Nav.Logo'

import { navLogoTitle } from './Nav.Styles'

export interface NavLogoProps {
  title?: string
  link?: string
}

export const NavLogo = ({ title, link }: NavLogoProps) => {
  const titleLength = title ? title.length : 0
  const titleLengthStyles = titleLength > 15 ? navLogoTitle.twoLineHeader : navLogoTitle.oneLineHeader

  return (
    <div className={navLogoTitle.logoWrapper}>
      <a href="https://carleton.ca" className="cu-topbar--logo">
        <img
          className="culogo"
          src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
          width="130"
          height="35"
          alt="Logo"
        />
        <img
          className="cushield"
          src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
          width="28"
          height="35"
          alt="Logo"
        />
      </a>
      {title && link && (
        <h1 className={`${navLogoTitle.siteTitle} ${titleLengthStyles}`}>
          <a href={link}>{title}</a>
        </h1>
      )}
    </div>
  )
}

NavLogo.displayName = 'Nav.Logo'

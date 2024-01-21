import { navLogoStyles } from './Nav.Styles'

export interface NavLogoProps {
  title?: string
  link?: string
}

export const NavLogo = ({ title, link }: NavLogoProps) => {
  return (
    <div className={navLogoStyles.wrapper}>
      <a href="https://carleton.ca" className={navLogoStyles.link}>
        <img
          className={navLogoStyles.logo}
          src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
          width="148"
          height="40"
          alt="Logo"
        />
        <img
          className={navLogoStyles.shield}
          src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
          width="30"
          height="38"
          alt="Logo"
        />
      </a>
      {title && link && (
        <div className={navLogoStyles.siteTitleWrapper}>
          <a href={link} className={`${navLogoStyles.siteTitle}`}>
            {title}
          </a>
        </div>
      )}
    </div>
  )
}

NavLogo.displayName = 'Nav.Logo'

import { useLinkContext } from '../LinkProvider'

export interface NavLogoProps {
  title?: string
  link?: string
}

export const NavLogo = ({ title, link }: NavLogoProps) => {
  const LinkComponent = useLinkContext()

  return (
    <div className="cu-nav__top flex items-center py-3.5 gap-3 md:gap-5 shrink-1 md:shrink-0 max-sm:grow">
      {title && link && (
        <a href="https://carleton.ca" className="shrink-0">
          <img
            className="w-[148px] h-[40px] shrink-0 hidden md:block"
            src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
            width="148"
            height="40"
            alt="Logo"
          />
          <img
            className="w-[30px] h-[38px] shrink-0 block md:hidden"
            src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
            width="30"
            height="38"
            alt="Logo"
          />
        </a>
      )}

      {!title && (
        <a href="https://carleton.ca" className="shrink-0">
          <img
            className="w-[148px] h-[40px] shrink-0"
            src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
            width="148"
            height="40"
            alt="Logo"
          />
        </a>
      )}

      {title && link && (
        <div className="leading-none max-w-[60%] sm:max-w-[200px] md:max-w-[220px]">
          <LinkComponent
            href={link}
            className="overflow-hidden text-base font-semibold leading-5 md:text-lg md:leading-6 text-cu-black-800 hover:text-cu-red-700 text-ellipsis line-clamp-2"
          >
            {title}
          </LinkComponent>
        </div>
      )}
    </div>
  )
}

NavLogo.displayName = 'Nav.Logo'

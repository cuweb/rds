import { Button } from '../../Button/Button'
import { footerStyles } from '../../../utils/globalClasses'
import { SmallLinks } from '../../../data/FooterData'

interface PrimaryLinks {
  id: number
  title: string
  url: string
}

interface SecondaryLinks {
  id: number
  title: string
  url: string
}

interface SocialLinks {
  id: number
  title: string
  url: string
  hover: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

interface FooterButtons {
  id: number
  title: string
  url: string
}

interface FooterSimpleProps {
  deptName?: string
  deptUrl?: string
  buildingName?: string
  officeNumber?: string
  primaryTitle?: string
  primaryLinks?: PrimaryLinks[]
  secondaryTitle?: string
  secondaryLinks?: SecondaryLinks[]
  socialLinks?: SocialLinks[]
  footerButtons?: FooterButtons[]
}

export const FooterSimple = ({
  deptName,
  deptUrl,
  buildingName,
  officeNumber,
  primaryTitle,
  primaryLinks,
  secondaryTitle,
  secondaryLinks,
  socialLinks,
  footerButtons,
}: FooterSimpleProps) => {
  return (
    <footer
      className={`bg-cu-black-900 px-8 pb-24 pt-8 md:px-10 md:pb-44 md:pt-14 ${footerStyles.wave}`}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="bg-white sr-only text-cu-black-900">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl">
        <div>
          <a className="flex justify-center mb-6 md:justify-start" href="https://carleton.ca">
            <img
              className="w-40 h-auto md:w-52"
              src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horizontal-outlined.svg"
              alt="Carleton University logo"
            />
          </a>
        </div>

        <div className="flex justify-between gap-10 text-white">
          <div className="mx-auto text-base text-center md:mx-0 md:text-left md:text-lg">
            {deptName && (
              <p className="mb-1.5">
                {deptUrl && <a href={deptUrl}>{deptName}</a>}
                {!deptUrl && deptName}
              </p>
            )}
            <ul className="space-y-1 text-cu-black-400">
              {deptName && (
                <li>
                  {officeNumber && `${officeNumber} `}
                  {buildingName}
                </li>
              )}
              <li>1125 Colonel By Drive</li>
              <li>Ottawa, ON, K1S 5B6, Canada</li>
              <li>Phone: 1-613-520-2600</li>
            </ul>

            {socialLinks && (
              <ul className="flex justify-center gap-6 pt-8 md:justify-start">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className={`text-cu-black-200 ${link.hover}`}>
                      <span className="sr-only">{link.title}</span>
                      <link.icon />
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {/* <ul className="flex justify-center gap-6 pt-8 md:justify-start">
              {FooterSocial.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={`text-cu-black-200 ${item.hover}`}>
                    <span className="sr-only">{item.name}</span>
                    <item.icon />
                  </a>
                </li>
              ))}
            </ul> */}

            <ul className="flex justify-center gap-6 mt-8 text-sm border-t border-cu-black-800 pt-7 md:justify-start md:text-base">
              {SmallLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-cu-black-400 hover:text-white hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex md:gap-16">
            {primaryLinks && (
              <div className="hidden lg:block">
                {primaryTitle && <p className="mb-1.5 text-base md:text-lg">{primaryTitle}</p>}
                <ul className="space-y-1 text-base md:text-lg">
                  {primaryLinks &&
                    primaryLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} className="text-cu-black-400 hover:text-white hover:underline">
                          {link.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {secondaryLinks && (
              <div className="hidden xl:block">
                {secondaryTitle && <p className="mb-1.5 text-base md:text-lg">{secondaryTitle}</p>}
                <ul className="space-y-1 text-base md:text-lg">
                  {secondaryLinks &&
                    secondaryLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} className="text-cu-black-400 hover:text-white hover:underline">
                          {link.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {footerButtons && (
              <div className="flex flex-col gap-5">
                {footerButtons &&
                  footerButtons.map((link, index) => (
                    <Button key={index} title={link.title} color={index === 0 ? 'red' : 'dark-grey'} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

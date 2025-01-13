import { useLinkContext } from '../LinkProvider/useLinkContext'
import { socialServices } from './SocialServices'

type socialServicesKeys = keyof typeof socialServices

export interface SocialIconsItemProps {
  socialService: socialServicesKeys
  socialLink: string
}

export const SocialIconsItem = ({ socialService, socialLink }: SocialIconsItemProps) => {
  const LinkComponent = useLinkContext()

  if (!socialService || !socialLink) {
    return null
  }

  return (
    <li className="">
      <LinkComponent className="text-cu-black-400" href={socialLink}>
        <span className="sr-only">{socialServices[socialService].title}</span>
        {socialServices[socialService].svg}
      </LinkComponent>
    </li>
  )
}

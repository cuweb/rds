import { SocialIconsItem } from './SocialIconsItem'

export interface SocialIconsProps {
  children?: React.ReactNode
}

export const SocialIconsWrapper = ({ children }: SocialIconsProps) => {
  return <ul className="cu-social not-prose flex flex-wrap gap-6 items-center">{children}</ul>
}

export const SocialIcons = Object.assign(SocialIconsWrapper, {
  Item: SocialIconsItem,
})

SocialIconsWrapper.displayName = 'SocialIcons'

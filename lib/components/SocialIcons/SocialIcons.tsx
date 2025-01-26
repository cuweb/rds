import { SocialIconsItem } from './SocialIconsItem'

export interface SocialIconsProps {
  children?: React.ReactNode
  prefix?: string
}

export const SocialIconsWrapper = ({ children, prefix }: SocialIconsProps) => {
  return (
    <>
      {prefix && (
        <p className="cu-social-prefix text-sm md:text-base text-cu-black-600 italic mb-2 not-prose">{prefix}</p>
      )}
      <ul className="cu-social not-prose flex flex-wrap gap-6 items-center">{children}</ul>
    </>
  )
}

export const SocialIcons = Object.assign(SocialIconsWrapper, {
  Item: SocialIconsItem,
})

SocialIconsWrapper.displayName = 'SocialIcons'

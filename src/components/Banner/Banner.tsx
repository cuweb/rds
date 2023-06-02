import React from 'react'
import styles, { typeStyles, contentStyles } from './Banner.styles'
import { rdsFontSizes, rdsMaxWidth } from '../../utils/optionClasses'
import { globalSpace } from '../../utils/globalClasses'
import { BannerAnimated } from './Banner.Animated'

export interface BannerProps {
  children?: React.ReactNode
  title?: string
  paragraph?: string
  fontSize?: '5xl' | '6xl'
  maxWidth?: 'full' | '5xl' | '7xl'
  isType?: 'light-grey' | 'light-fade' | 'dark-wave' | 'red-wave' | 'image' | 'animated'
  align?: 'center' | 'left'
  hasOverlap?: boolean
  image?: string
  imageAlt?: string
}

export interface BannerImgProps {
  image?: string
  imageAlt?: string
}

const BannerBase = ({
  children,
  title,
  paragraph,
  maxWidth = '5xl',
  isType = 'light-grey',
  fontSize = '5xl',
  align = 'center',
  hasOverlap,
  image,
  imageAlt = 'Decorative background image',
}: BannerProps & BannerImgProps) => {
  const bannerSpacing = isType === 'image' ? 'md:py-48' : 'md:py-32'

  const flexAlign =
    align === 'center'
      ? 'flex-col last:[&>*]:justify-center'
      : 'flex-col md:flex-row last:[&>*]:justify-center last:md:[&>*]:justify-end'

  const hasParaAndButtons = paragraph && children ? ' md:max-w-3xl md:w-8/12' : ''

  const contentAlign = align === 'center' ? 'text-center' : 'text-center md:text-left' + hasParaAndButtons

  let overlapStyles = hasOverlap ? styles.overlap : ''

  if (hasOverlap && isType === 'image') {
    overlapStyles = 'md:pb-48 md:pt-40'
  }

  return (
    <>
      <header
        className={`cu-banner ${styles.core} ${globalSpace.paddingX} ${typeStyles[isType]} ${bannerSpacing} ${overlapStyles}`}
        id="banner"
      >
        <div
          className={`z-10 flex flex-1 ${flexAlign} m-auto items-center justify-center gap-8 ${rdsMaxWidth[maxWidth]} [&>*]:z-10`}
        >
          <div className={`flex flex-auto flex-col gap-6 ${contentAlign}`}>
            <h1 className={`${contentStyles.title} ${rdsFontSizes[fontSize]}`}>{title}</h1>
            {paragraph && <p className={contentStyles.paragraph}>{paragraph}</p>}
          </div>
          {children}
        </div>

        {isType === 'image' && <BannerImg image={image} imageAlt={imageAlt} />}
        {isType === 'dark-wave' && <BannerWave />}
        {isType === 'red-wave' && <BannerWave />}
        {isType === 'animated' && <BannerAnimated />}
      </header>
    </>
  )
}

const BannerImg = ({ image, imageAlt }: BannerImgProps) => {
  return (
    <div className="absolute inset-0">
      <img className="h-full w-full object-cover" src={image} alt={imageAlt} />
      <div className="absolute inset-0 bg-cu-black-800 mix-blend-multiply" aria-hidden="true" />
    </div>
  )
}

const BannerWave = () => {
  return <div className="absolute inset-0 bg-cu-waves-white-10 bg-contain bg-bottom bg-no-repeat md:bg-cover"></div>
}

const ButtonGroup = ({ children }: BannerProps) => {
  return <div className={`buttons ${styles.buttonWrapper}`}>{children}</div>
}

export const Banner = Object.assign(BannerBase, {
  ButtonGroup,
})

BannerBase.displayName = 'Banner'
ButtonGroup.displayName = 'Banner.ButtonGroup'

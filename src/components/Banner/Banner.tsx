import React from 'react'
import { rdsFontSizes, rdsMaxWidth } from '../../utils/tailwindClasses'
// import { BannerAnimated } from './Banner.Animated'

export interface BannerProps {
  children?: React.ReactNode
  title?: string
  paragraph?: string
  fontSize?: '5xl' | '6xl'
  maxWidth?: 'none' | 'full' | '5xl' | '7xl'
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

const styles = {
  core: `not-prose relative py-16 md:py-32 md:flex md:items-center md:px-8 md:min-h-[240px]`,
  buttonWrapper: `flex gap-6 flex-wrap md:flex-1`,
  overlap: `md:pb-32 md:pt-20`,
}

const typeStyles = {
  'light-grey': `bg-cu-black-50 text-cu-black-800`,
  'light-fade': `bg-gradient-to-b from-white to-cu-black-50 text-cu-black-800`,
  'dark-wave': `bg-cu-black-800 text-white`,
  'red-wave': `bg-gradient-to-b from-cu-red to-cu-red-900 text-white`,
  animated: `bg-white text-cu-black-800`,
  image: `bg-cu-black-800 text-white md:py-48`,
}

const contentStyles = {
  title: `font-semibold text-3xl`,
  paragraph: `text-base lg:text-xl max-w-5xl`,
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

  //   const overlapStyles2 =
  //     hasOverlap && isType !== image ? styles.overlap : 'md:pb-48';

  //   alert(overlapStyles);

  return (
    <>
      <header className={`${styles.core} ${typeStyles[isType]} ${bannerSpacing} ${overlapStyles}`} id="banner">
        <div
          className={`z-10 flex flex-1 ${flexAlign} items-center justify-center gap-8 m-auto ${rdsMaxWidth[maxWidth]} [&>*]:z-10`}
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
        {/* {isType === 'animated' && <BannerAnimated />} */}
      </header>
    </>
  )
}

const BannerImg = ({ image, imageAlt }: BannerImgProps) => {
  return (
    <div className="absolute inset-0">
      <img className="object-cover w-full h-full" src={image} alt={imageAlt} />
      <div className="absolute inset-0 bg-cu-black-800 mix-blend-multiply" aria-hidden="true" />
    </div>
  )
}

const BannerWave = () => {
  return <div className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-10 md:bg-cover"></div>
}

const ButtonGroup = ({ children }: BannerProps) => {
  return <div className={`buttons ${styles.buttonWrapper}`}>{children}</div>
}

export const Banner = Object.assign(BannerBase, {
  ButtonGroup,
})

BannerBase.displayName = 'Banner'
ButtonGroup.displayName = 'Banner.ButtonGroup'

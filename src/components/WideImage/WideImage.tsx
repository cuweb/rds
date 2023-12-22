import React from 'react'
import { rdsMaxWidth, rdsOpacity } from '../../utils/optionClasses'
import { styles } from './WideImage.Styles'
import { WideImageMailChimp } from './WideImageMailChimp'
import { WideImageCampaignMonitor } from './WideImageCampaignMonitor'

export interface WideImageProps {
  children?: React.ReactNode
  title?: string
  image?: string
  headerType?: 'h1' | 'h2'
  maxWidth?: 'full' | '5xl' | '7xl' | 'max'
  opacity?: 40 | 50 | 60 | 70 | 80
  focalPointX?: string
  focalPointY?: string
  isType?: 'light' | 'dark' | 'image'
}

export const WideImageWrapper = ({
  children,
  title,
  image,
  headerType = 'h2',
  maxWidth = 'max',
  opacity = 70,
  focalPointX = '50',
  focalPointY = '50',
  isType = 'light',
}: WideImageProps) => {
  const inlineStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  let hasImageStyles
  let imageTextStyles

  if (image) {
    isType = 'image'
  }

  switch (isType) {
    case 'light':
      imageTextStyles = 'text-cu-black-700'
      hasImageStyles = styles.noImage
      break
    case 'image':
      imageTextStyles = 'text-white'
      hasImageStyles = styles.imageBg
      break
    case 'dark':
      imageTextStyles = 'text-white'
      hasImageStyles = styles.darkBg
      break
    default:
      imageTextStyles = 'text-cu-black-700'
      hasImageStyles = styles.noImage
  }

  return (
    <div style={inlineStyle} className={`${styles.baseBg} ${rdsMaxWidth[maxWidth]} ${hasImageStyles}`}>
      {image && <div className={`${styles.imageOverlay} ${rdsOpacity[opacity]}`}></div>}
      <div className={`${styles.content} ${imageTextStyles} cu-wideimage-input-${isType}`}>
        {headerType === 'h1' && <h1 className={`${styles.header} ${styles.headerOne}`}>{title}</h1>}
        {headerType === 'h2' && <h2 className={`${styles.header} ${styles.headerTwo}`}>{title}</h2>}
        {children}
        {isType === 'dark' && (
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#cfcfd9" />
                <stop offset="1" stopColor="#eeeeee" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        )}
      </div>
    </div>
  )
}

export const WideImage = Object.assign(WideImageWrapper, {
  MailChimp: WideImageMailChimp,
  CampaignMonitor: WideImageCampaignMonitor,
})

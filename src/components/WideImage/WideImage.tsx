import React from 'react'
import { rdsMaxWidth, rdsOpacity } from '../../utils/optionClasses'
import { WideImageSignup } from './WideImageSignup'

export const styles = {
  baseBg: `relative flex items-center justify-center mx-auto px-8 mb-6 overflow-hidden md:px-16 md:mb-12 rounded-xl not-contained not-prose`,
  lightBg: `text-cu-black-800 py-20 bg-cu-black-50`,
  darkBg: `text-white py-20 bg-cu-black-900`,
  imageBg: `relative py-24 text-white bg-opacity-50 bg-cover bg-cu-black-50 md:py-28 lg:py-36 xl:py-48`,
  overlay: `absolute w-full h-full bg-black`,
  content: `relative z-10 flex flex-col items-center gap-2 text-center`,
  headerOne: `font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] max-w-5xl`,
  headerTwo: `font-semibold text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] max-w-5xl`,
}

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
  hasImageStyles = isType === 'dark' ? styles.darkBg : styles.lightBg

  if (image) {
    hasImageStyles = styles.imageBg
  }

  return (
    <div
      style={inlineStyle}
      className={`cu-wideimage cu-container ${styles.baseBg} ${rdsMaxWidth[maxWidth]} ${hasImageStyles}`}
    >
      {image && <div className={`${styles.overlay} ${rdsOpacity[opacity]}`}></div>}

      <div className={`${styles.content} cu-wideimage-content cu-wideimage-${isType}`}>
        {headerType === 'h1' && <h1 className={`${styles.headerOne}`}>{title}</h1>}
        {headerType === 'h2' && <h2 className={`${styles.headerTwo}`}>{title}</h2>}

        {children}
      </div>

      {isType === 'dark' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full opacity-10"
          fill="none"
          viewBox="0 0 1280 260"
        >
          <g filter="url(#a)">
            <ellipse cx="646" cy="260" fill="#fff" rx="640" ry="200" />
          </g>
          <defs>
            <filter
              id="a"
              width="1400"
              height="520"
              x="-54"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_6_9" stdDeviation="30" />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  )
}

export const WideImage = Object.assign(WideImageWrapper, {
  Signup: WideImageSignup,
})

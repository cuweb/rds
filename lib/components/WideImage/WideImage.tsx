import React from 'react'
import { rdsMaxWidth } from '../../utils/optionClasses'
import { WideImageSignup } from './WideImageSignup'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const styles = {
  baseBg: `relative flex items-center bg-cu-waves-white justify-center mx-auto px-8 mb-6 overflow-hidden md:px-16 md:mb-12 rounded-xl not-contained not-prose`,
  lightBg: `text-cu-black-800 bg-cu-black-50`,
  darkBg: `text-white bg-cu-black-900`,
  imageBg: `relative text-white bg-opacity-50 bg-cover bg-cu-black-50`,
  overlay: `absolute w-full h-screen bg-black`,
  content: `relative z-10 flex flex-col items-center gap-2 text-center`,
  headerOne: `font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] max-w-5xl`,
  headerTwo: `font-semibold text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] max-w-5xl`,
}

const opacityValues = Array.from({ length: 21 }, (_, index) => 60 + index)

export interface WideImageProps {
  children?: React.ReactNode
  scrollTo?: React.ReactNode
  maxHeight?: 'full' | 'sm' | 'md' | 'lg'
  as?: 'section' | 'div'
  title?: string
  image?: string
  headerType?: 'h1' | 'h2'
  maxWidth?: 'full' | '5xl' | '7xl' | 'max'
  opacity?: (typeof opacityValues)[number]
  focalPointX?: string
  focalPointY?: string
  isType?: 'light' | 'dark' | 'image'
}

export const WideImageWrapper = ({
  children,
  scrollTo,
  as = 'div',
  title,
  image,
  headerType = 'h2',
  maxWidth = 'max',
  maxHeight = 'sm',
  opacity = 70,
  focalPointX = '50',
  focalPointY = '50',
  isType = 'light',
}: WideImageProps) => {
  const WideImageComponent = as

  const inlineStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  const opacityStyle = {
    opacity: `0.${opacity}`,
  }

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

  let hasImageStyles
  hasImageStyles = isType === 'dark' ? styles.darkBg : styles.lightBg

  if (image && !scrollTo) {
    hasImageStyles = styles.imageBg
    maxHeight = 'md'
  }

  if (image && scrollTo) {
    hasImageStyles = styles.imageBg
    maxHeight = 'lg'
  }

  let topBottomSpace = ''

  switch (maxHeight) {
    case 'sm':
      topBottomSpace = 'py-20'
      break
    case 'md':
      topBottomSpace = 'py-24 md:py-28 lg:py-36 xl:py-48'
      break
    case 'lg':
      // topBottomSpace = 'pt-24 md:pt-28 lg:pt-36 xl:pt-48 pb-32 md:pb-36 lg:pb-44 xl:pb-60'
      topBottomSpace = 'py-24 md:py-28 lg:py-36 xl:py-48'
      break
    case 'full':
      topBottomSpace = 'h-screen'
      break
    default:
      break
  }

  console.log(topBottomSpace)

  return (
    <WideImageComponent
      style={inlineStyle}
      className={`cu-wideimage cu-section ${styles.baseBg} ${topBottomSpace} ${rdsMaxWidth[maxWidth]}  ${hasImageStyles}`}
    >
      {image && <div className={`${styles.overlay}`} style={opacityStyle}></div>}

      <div className={`${styles.content} cu-wideimage-content cu-wideimage-${isType}`}>
        {headerType === 'h1' && <h1 className={`${styles.headerOne}`}>{title}</h1>}
        {headerType === 'h2' && <h2 className={`${styles.headerTwo}`}>{title}</h2>}

        {children}

        {scrollTo && (
          <ChevronDownIcon
            onClick={handleScroll}
            className="w-8 h-8 mt-5 cursor-pointer"
            stroke={'white'}
            strokeWidth={2}
          />
        )}
      </div>

      {/* {scrollTo && <div className="absolute w-full cu-waves-red bg-bottom bg-cover py-12"></div>} */}

      {/* {isType === 'dark' && (
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
      )} */}
    </WideImageComponent>
  )
}

export const WideImage = Object.assign(WideImageWrapper, {
  Signup: WideImageSignup,
})

WideImageWrapper.displayName = 'WideImage'

import React from 'react'
import { rdsMaxWidth } from '../../utils/optionClasses'
import { WideImageSignup } from './WideImageSignup'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

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
  hasImageStyles = isType === 'dark' ? 'text-white bg-cu-black-900' : 'text-cu-black-800 bg-cu-black-50'

  if (image && !scrollTo) {
    hasImageStyles = 'relative text-white bg-opacity-50 bg-cover bg-cu-black-50'
    maxHeight = 'md'
  }

  if (image && scrollTo) {
    hasImageStyles = 'relative text-white bg-opacity-50 bg-cover bg-cu-black-50'
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
      topBottomSpace = 'py-28 md:py-36 lg:py-48 xl:py-60'
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
      className={`cu-wideimage cu-section relative flex items-center justify-center mx-auto px-8 mb-6 overflow-hidden md:px-16 md:mb-12 rounded-xl not-contained not-prose ${rdsMaxWidth[maxWidth]} ${hasImageStyles} ${topBottomSpace}`}
    >
      {scrollTo && image && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full z-50"
          fill="none"
          viewBox="0 0 1280 312"
        >
          <path
            fill="#fff"
            d="M26.412 315.608c-.602-.268-6.655-2.412-13.524-4.769a1943.84 1943.84 0 0 1-14.682-5.144l-2.276-.858v-5.358c0-4.876.086-5.358.773-5.09 1.674.643 21.38 5.84 34.646 9.109 14.682 3.59 28.935 6.858 45.936 10.449l9.874 2.089H57.322c-16.4 0-30.31-.16-30.91-.428ZM460.019 315.233c42.974-10.074 75.602-19.88 132.443-39.867 76.16-26.791 152.063-57.709 222.385-90.663 16.7-7.823 21.336-10.074 44.262-21.273 85.004-41.688 134.719-64.193 195.291-88.413 66.55-26.577 145.2-53.584 194.27-66.765C1258.5 5.626 1281.34 0 1282.24 0c.17 0 .34 27.596.34 61.3v61.299l-2.23.375c-84.7 13.718-165.93 35.955-310.736 84.931-46.494 15.753-65.427 22.076-96.166 32.15-9.102 3-24.814 8.198-34.989 11.574-107.543 35.954-153.008 50.422-196.626 62.639l-6.74 1.876-89.126-.054c-78.135-.054-88.782-.161-85.948-.857ZM729.628 312.875c33.229-10.985 69.248-23.523 127.506-44.207 118.705-42.223 164.596-57.709 217.446-73.302 2.62-.75 8.29-2.465 12.67-3.751 56.19-16.772 126.94-33.597 184.17-43.671 5.07-.91 9.66-1.768 10.22-1.875l.94-.161v170.236l-281.28-.054H719.968l9.66-3.215ZM246.864 313.411c-65.041-2.251-143.047-12.11-208.432-26.256-18.375-3.965-41.73-9.538-42.202-10.074-.171-.214-.257-21.38-.214-47.046l.129-46.618 6.654 3.697c57.313 32.043 118.491 56.531 197.699 79.143 40.313 11.521 83.459 18.058 138.669 21.059 15.584.857 65.685.857 81.14 0 33.744-1.876 61.306-4.93 88.396-9.806 6.396-1.126 11.634-1.983 11.722-1.929.255.375-20.48 7.769-30.999 11.038-28.592 8.948-59.288 15.646-91.873 20.147-26.36 3.59-50.015 5.627-78.35 6.698-15.584.59-55.209.59-72.339-.053Z"
          />
          <path fill="#fff" d="M-3.066 295.067 32.06 304.1v9.033H-3.066v-18.066Z" />
        </svg>
      )}
      {image && <div className="absolute w-full h-screen bg-black" style={opacityStyle}></div>}

      <div
        className={`relative z-10 flex flex-col items-center gap-2 text-center cu-wideimage-content cu-wideimage-${isType}`}
      >
        {headerType === 'h1' && (
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] max-w-5xl">{title}</h1>
        )}
        {headerType === 'h2' && (
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] max-w-5xl">{title}</h2>
        )}

        {children}

        {scrollTo && image && (
          <ChevronDownIcon
            onClick={handleScroll}
            className="w-8 h-8 mt-5 cursor-pointer"
            stroke={'white'}
            strokeWidth={2}
          />
        )}
      </div>

      {isType === 'dark' && !scrollTo && (
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
    </WideImageComponent>
  )
}

export const WideImage = Object.assign(WideImageWrapper, {
  Signup: WideImageSignup,
})

WideImageWrapper.displayName = 'WideImage'

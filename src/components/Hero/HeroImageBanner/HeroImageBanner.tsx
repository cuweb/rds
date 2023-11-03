import React from 'react'

export interface HeroImageBannerProps {
  children?: React.ReactNode
  title?: string
  image?: string
  focalPointX?: string
  focalPointY?: string
}

const styles = {
  baseBg: `flex items-center justify-center mx-auto mb-6 overflow-hidden md:mb-12 rounded-xl not-contained not-prose max-w-screen-2xl`,
  noImage: `py-20 bg-cu-black-50`,
  imageBg: `relative py-24 bg-opacity-50 bg-cover bg-cu-black-50 md:py-28 lg:py-36 xl:py-48`,
  imageOverlay: `absolute w-full h-full bg-black/60`,
}

export const HeroImageBanner = ({
  children,
  title,
  image,
  focalPointX = '50',
  focalPointY = '50',
}: HeroImageBannerProps) => {
  const inlineStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  const hasImageStyles = image ? styles.imageBg : styles.noImage
  const imageTextStyles = image ? 'text-white' : 'text-cu-black-700'

  return (
    <div style={inlineStyle} className={`${styles.baseBg} ${hasImageStyles}`}>
      {image && <div className={styles.imageOverlay}></div>}

      <div className="relative z-10 flex flex-col items-center gap-5 px-2 md:gap-10 md:px-4">
        <h2 className={`text-4xl font-semibold md:text-5xl xl:text-6xl ${imageTextStyles}`}>{title}</h2>
        {children}
      </div>
    </div>
  )
}

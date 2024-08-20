import React from 'react'

export interface WideWaveProps {
  children?: React.ReactNode
  wave?: 'red' | 'black'
  hasRaven?: boolean
}

export const WideWave = ({ children, wave = 'red', hasRaven = false }: WideWaveProps) => {
  const waveBgClass = wave === 'red' ? 'bg-cu-waves-hard-edge-red' : 'bg-cu-waves-hard-edge-black'

  const waveBgPosition = {
    backgroundPosition: '-1px -1px',
  }

  const waveBgColor = wave === 'red' ? 'bg-cu-red' : 'bg-cu-black-900'

  const topPadding =
    wave === 'red'
      ? 'pt-16 sm:pt-24 md:pt-28 lg:pt-36 xl:pt-40 2xl:pt-44'
      : 'pt-20 sm:pt-24 md:pt-32 lg:pt-44 xl:pt-56 2xl:pt-60'

  // Needs to be a class for consistency in RDS
  const edgePadding = 'px-8 md:px-10'

  return (
    <section
      className={`relative cu-widewaves cu-prose cu-prose-light ${waveBgClass} ${waveBgColor} ${edgePadding} ${topPadding} pb-8 md:pb-20 bg-[length:100.5%] bg-no-repeat cu-no-browsers-edge not-contained`}
      style={waveBgPosition}
    >
      {hasRaven && wave === 'black' ? (
        <>
          <div className="relative z-20">{children}</div>
          <div className="bg-cu-ravens-logo-white opacity-10 bg-[length:400px] z-10 bg-[bottom_right] bg-no-repeat bottom-20 -right-44 w-full h-full absolute" />
        </>
      ) : (
        <>{children}</>
      )}
    </section>
  )
}

import React from 'react'

export interface WideWaveProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  wave?: 'red' | 'black'
  hasRaven?: boolean
}

export const WideWave = ({ children, as = 'section', wave = 'red', hasRaven = false }: WideWaveProps) => {
  const SectionComponent = as
  const topPadding = 'pt-16 sm:pt-24 md:pt-28 lg:pt-36 xl:pt-40 2xl:pt-40'
  const waveBgClass = wave === 'red' ? 'bg-cu-waves-hard-edge-red' : 'bg-cu-waves-hard-edge-black'
  const waveBgColor = wave === 'red' ? 'bg-cu-red' : 'bg-cu-black-900'
  const waveBgPosition = {
    backgroundPosition: '-1px -1px',
  }

  return (
    <SectionComponent
      className={`relative cu-section cu-widewaves overflow-x-hidden cu-prose cu-prose-light cu-no-browsers-edge not-contained ${waveBgClass} ${waveBgColor} bg-repeat-x xl:bg-[length:1200px_156px] pb-5 md:pb-12 ${topPadding}`}
      style={waveBgPosition}
    >
      <div className="cu-widewaves-content relative z-20">{children}</div>
      {hasRaven && wave === 'black' && (
        <div className="bg-cu-ravens-logo-white opacity-10 bg-[length:400px] z-10 bg-[bottom_right] bg-no-repeat bottom-20 -right-44 w-full h-full absolute" />
      )}
    </SectionComponent>
  )
}

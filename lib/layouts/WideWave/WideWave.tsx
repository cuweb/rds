import React from 'react'

export interface WideWaveProps {
  children?: React.ReactNode
  wave?: 'red' | 'black'
}

export const WideWave = ({ children, wave = 'red' }: WideWaveProps) => {
  const topPadding = 'pt-16 sm:pt-24 md:pt-28 lg:pt-36 xl:pt-40 2xl:pt-40'

  const waveBgType =
    wave === 'red' ? 'bg-cu-waves-hard-edge-red bg-cu-red' : 'bg-cu-waves-hard-edge-black bg-cu-black-900'
  const waveBgPosition = {
    backgroundPosition: '-1px -1px',
  }

  // TODO GLOBAL: break out of main width
  const $breakoutMaxWidth = `w-screen ml-offset-center`

  // TODO GLOBAL:
  const $primarySpacing = `px-4 md:px-6 lg:px-12`

  return (
    <section
      className={`cu-widewave relative overflow-x-hidden ${$breakoutMaxWidth} ${$primarySpacing} cu-max-w-child-5xl ${waveBgType} bg-repeat-x xl:bg-[length:1200px_156px] pb-5 md:pb-12 ${topPadding}`}
      style={waveBgPosition}
    >
      <div className={`cu-widewaves-content cu-prose-light relative z-20`}>{children}</div>
    </section>
  )
}

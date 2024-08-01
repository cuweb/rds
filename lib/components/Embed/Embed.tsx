import React from 'react'
import { EmbedPowerBi } from './Embed.PowerBi'
import { EmbedKaltura } from './Embed.Kaltura'
import { EmbedSoundCloud } from './Embed.SoundCloud'
import { EmbedYouTube } from './Embed.YouTube'
import { EmbedVimeo } from './Embed.Vimeo'
import { EmbedTED } from './Embed.TED'
import { rdsMaxWidth } from '../../utils/optionClasses'
import { styles } from './Embed.Styles'

export interface EmbedProps {
  children: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
}

export const EmbedWrapper = ({ children, maxWidth = '5xl' }: EmbedProps) => {
  return (
    <figure className={`cu-embed cu-component not-contained mx-auto ${rdsMaxWidth[maxWidth]}`}>
      <div className={`${styles.base}`}>{children}</div>
    </figure>
  )
}

export const Embed = Object.assign(EmbedWrapper, {
  PowerBi: EmbedPowerBi,
  Kaltura: EmbedKaltura,
  SoundCloud: EmbedSoundCloud,
  YouTube: EmbedYouTube,
  TED: EmbedTED,
  Vimeo: EmbedVimeo,
})

EmbedWrapper.displayName = 'Embed'

import React from 'react'
import { EmbedPowerBi } from './Embed.PowerBi'
import { EmbedKaltura } from './Embed.Kaltura'
import { EmbedSoundCloud } from './Embed.SoundCloud'
import { EmbedYouTube } from './Embed.YouTube'
import { EmbedVimeo } from './Embed.Vimeo'
import { EmbedTED } from './Embed.TED'
import { maxWidthClasses } from '../../utils/propClasses'
import { styles } from './Embed.Styles'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface EmbedProps {
  children: React.ReactNode
  maxWidth?: maxWidthKeys
}

export const EmbedWrapper = ({ children, maxWidth = '5xl' }: EmbedProps) => {
  return (
    <figure className={`cu-embed cu-component not-contained mx-auto ${maxWidthClasses[maxWidth]}`}>
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

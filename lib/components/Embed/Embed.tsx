import React from 'react'
import { EmbedPowerBi } from './Embed.PowerBi'
import { EmbedKaltura } from './Embed.Kaltura'
import { EmbedSoundCloud } from './Embed.SoundCloud'
import { EmbedYouTube } from './Embed.YouTube'
import { EmbedVimeo } from './Embed.Vimeo'
import { EmbedTED } from './Embed.TED'

export interface EmbedProps {
  children: React.ReactNode
}

export const EmbedWrapper = ({ children }: EmbedProps) => {
  return (
    <figure className="cu-embed cu-component-updated">
      <div className="relative w-full pb-[56.25%] overflow-hidden border border-cu-black-100">{children}</div>
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

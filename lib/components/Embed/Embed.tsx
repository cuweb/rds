import React from 'react'
import { EmbedPowerBi } from './Embed.PowerBi'
import { EmbedKaltura } from './Embed.Kaltura'
import { EmbedSoundCloud } from './Embed.SoundCloud'
import { EmbedYouTube } from './Embed.YouTube'
import { EmbedVimeo } from './Embed.Vimeo'
import { EmbedTED } from './Embed.TED'
import { EmbedHubSpot } from './Embed.HubSpot'
import { Figure } from '../Figure/Figure'

export interface EmbedProps {
  children: React.ReactNode
  isRounded?: boolean
}

export const EmbedWrapper = ({ children, isRounded = false }: EmbedProps) => {
  const rounded = isRounded ? 'rounded-xl' : 'none'

  return (
    <>
      <Figure rounded={isRounded ? 'xl' : 'none'}>
        <div className={`relative ${rounded} overflow-hidden w-full pb-[56.25%] border border-cu-black-100`}>
          {children}
        </div>
      </Figure>
    </>
  )
}

export const Embed = Object.assign(EmbedWrapper, {
  PowerBi: EmbedPowerBi,
  Kaltura: EmbedKaltura,
  SoundCloud: EmbedSoundCloud,
  YouTube: EmbedYouTube,
  TED: EmbedTED,
  Vimeo: EmbedVimeo,
  HubSpot: EmbedHubSpot,
})

EmbedWrapper.displayName = 'Embed'

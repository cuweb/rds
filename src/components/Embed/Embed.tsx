import React from 'react'
import { EmbedPowerBi } from './Embed.PowerBi'
import { styles } from './Embed.Styles'

export interface EmbedProps {
  children: React.ReactNode
}

export const EmbedWrapper = ({ children }: EmbedProps) => {
  return <div className={`${styles.base}`}>{children}</div>
}

export const Embed = Object.assign(EmbedWrapper, {
  PowerBi: EmbedPowerBi,
})

import React from 'react'
import { EmbedPowerBi } from './Embed.PowerBi'
import { rdsMaxWidth } from '../../utils/optionClasses'
import { styles } from './Embed.Styles'

export interface EmbedProps {
  children: React.ReactNode
  maxWidth: '5xl' | '7xl'
}

export const EmbedWrapper = ({ children, maxWidth = '5xl' }: EmbedProps) => {
  return <div className={`${styles.base} ${rdsMaxWidth[maxWidth]}`}>{children}</div>
}

export const Embed = Object.assign(EmbedWrapper, {
  PowerBi: EmbedPowerBi,
})

import { styles } from './Embed.Styles'
export interface EmbedPowerBiProps {
  title: string
  url: string
}

export const EmbedPowerBi = ({ title, url }: EmbedPowerBiProps) => {
  return <iframe title={title} src={url} className={styles.iframe}></iframe>
}

EmbedPowerBi.displayName = 'Embed.PowerBi'

export interface EmbedPowerBiProps {
  title: string
  url: string
}

export const EmbedPowerBi = ({ title, url }: EmbedPowerBiProps) => {
  return <iframe title={title} src={url} className="cu-embed-iframe"></iframe>
}

EmbedPowerBi.displayName = 'Embed.PowerBi'

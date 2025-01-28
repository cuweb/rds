export interface EmbedHubSpotProps {
  title: string
  url: string
}

export const EmbedHubSpot = ({ title, url }: EmbedHubSpotProps) => {
  return (
    <iframe
      title={title}
      src={url}
      className="cu-embed-iframe"
      style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
    />
  )
}

EmbedHubSpot.displayName = 'Embed.HubSpot'

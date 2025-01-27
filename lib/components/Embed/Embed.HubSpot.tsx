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
      allow="autoplay *; fullscreen *; encrypted-media *"
      referrerPolicy="no-referrer-when-downgrade"
      sandbox="allow-same-origin allow-scripts"
      style={{ width: '100%', height: '500px', border: 'none' }}
    ></iframe>
  )
}

EmbedHubSpot.displayName = 'Embed.HubSpot'

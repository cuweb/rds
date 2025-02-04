export interface EmbedHubSpotProps {
  title: string
  url: string
}

export const EmbedHubSpot = ({ title, url }: EmbedHubSpotProps) => {
  return (
    <div>
      <iframe
        title={title}
        src={url}
        className="form-embed-iframe"
        style={{
          width: '100%',
          border: 'none',
        }}
      />
    </div>
  )
}

EmbedHubSpot.displayName = 'FormEmbed.HubSpot'

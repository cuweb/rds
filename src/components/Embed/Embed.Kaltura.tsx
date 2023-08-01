import { styles } from './Embed.Styles'
export interface EmbedKalturaProps {
  title: string
  url: string
}

export const EmbedKaltura = ({ title, url }: EmbedKalturaProps) => {
  return (
    <iframe
      // id="kmsembed-1_8q7610g9"
      title={title}
      src={url}
      className={`kmsembed ${styles.kaltura}`}
      allowFullScreen
      allow="autoplay *; fullscreen *; encrypted-media *"
      referrerPolicy="no-referrer-when-downgrade"
      sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
    ></iframe>
  )
}

EmbedKaltura.displayName = 'Embed.Kaltura'

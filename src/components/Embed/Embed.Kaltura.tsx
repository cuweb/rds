import { styles } from './Embed.Styles'
export interface EmbedKalturaProps {
  title: string
  url: string
}

export const EmbedKaltura = ({ title, url }: EmbedKalturaProps) => {
  let kalturaUrl = ''
  let lastPiece = ''

  if (url) {
    const urlParts = url.split('/')
    lastPiece = urlParts[urlParts.length - 1]
    kalturaUrl = `https://mediaspace.carleton.ca/embed/secure/iframe/entryId/${lastPiece}/uiConfId/36153741/st/0`
  }

  return (
    <iframe
      id={`kmsembed-${lastPiece}`}
      title={title}
      src={kalturaUrl}
      className={styles.iframe}
      allowFullScreen
      allow="autoplay *; fullscreen *; encrypted-media *"
      referrerPolicy="no-referrer-when-downgrade"
      sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
    ></iframe>
  )
}

EmbedKaltura.displayName = 'Embed.Kaltura'

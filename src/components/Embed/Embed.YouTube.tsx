import { styles } from './Embed.Styles'
export interface EmbedYouTubeProps {
  title: string
  url: string
}

export const EmbedYouTube = ({ title, url }: EmbedYouTubeProps) => {
  let embedURL = ''
  let lastPiece = ''

  if (url) {
    const urlParts = url.split('/')
    lastPiece = urlParts[urlParts.length - 1]
    embedURL = `https://www.youtube.com/embed/${lastPiece}`
  }

  return (
    <iframe
      id={`kmsembed-${lastPiece}`}
      title={title}
      src={embedURL}
      className={`kmsembed ${styles.video}`}
      allowFullScreen
      allow="autoplay *; fullscreen *; encrypted-media *"
      referrerPolicy="no-referrer-when-downgrade"
      sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
    ></iframe>
  )
}

EmbedYouTube.displayName = 'Embed.YouTube'

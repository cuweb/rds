import { styles } from './Embed.Styles'
export interface EmbedTEDProps {
  title: string
  url: string
}

export const EmbedTED = ({ title, url }: EmbedTEDProps) => {
  let embedURL = ''
  let lastPiece = ''

  if (url) {
    const urlParts = url.split('/')
    lastPiece = urlParts[urlParts.length - 1]
    embedURL = `https://embed.ted.com/talks/lang/en/${lastPiece}`
  }

  return (
    <iframe
      title={title}
      src={embedURL}
      className={`${styles.video}`}
      allowFullScreen
      allow="autoplay *; fullscreen *; encrypted-media *"
      referrerPolicy="no-referrer-when-downgrade"
      sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
    ></iframe>
  )
}

EmbedTED.displayName = 'Embed.TED'

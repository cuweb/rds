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
    <iframe title={title} src={embedURL} width="854" height="480" className={styles.iframe} allowFullScreen></iframe>
  )
}

EmbedTED.displayName = 'Embed.TED'

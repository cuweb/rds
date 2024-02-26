import { styles } from './Embed.Styles'
export interface EmbedVimeoProps {
  title: string
  url: string
}

export const EmbedVimeo = ({ title, url }: EmbedVimeoProps) => {
  let embedURL = ''
  let lastPiece = ''

  if (url) {
    const urlParts = url.split('/')
    lastPiece = urlParts[urlParts.length - 1]
    embedURL = `https://player.vimeo.com/video/${lastPiece}`
  }

  return (
    <iframe
      title={title}
      src={embedURL}
      className={`${styles.iframe}`}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

EmbedVimeo.displayName = 'Embed.Vimeo'

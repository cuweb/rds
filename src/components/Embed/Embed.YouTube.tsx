import { styles } from './Embed.Styles'
export interface EmbedYouTubeProps {
  title: string
  url: string
}

export const EmbedYouTube = ({ title, url }: EmbedYouTubeProps) => {
  let embedURL = ''
  let videoID

  if (url) {
    const match = url.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})/)
    videoID = match ? match[1] : null
    embedURL = `https://www.youtube.com/embed/${videoID}`
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

EmbedYouTube.displayName = 'Embed.YouTube'

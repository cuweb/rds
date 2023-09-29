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
      className={`${styles.iframe}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}

EmbedYouTube.displayName = 'Embed.YouTube'

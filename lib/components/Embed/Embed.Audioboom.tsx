export interface EmbedAudioboomProps {
  title: string
  url: string
}

export const EmbedAudioboom = ({ title, url }: EmbedAudioboomProps) => {
  let embedURL = ''

  if (url) {
    const match = url.match(/\/posts\/(\d+)/)
    const postID = match ? match[1] : null
    embedURL = `https://audioboom.com/posts/${postID}/embed/v4`
  }

  return (
    <iframe
      title={title}
      src={embedURL}
      className="cu-embed-iframe"
      width="100%"
      allow="autoplay"
      allowFullScreen
    ></iframe>
  )
}

EmbedAudioboom.displayName = 'Embed.Audioboom'

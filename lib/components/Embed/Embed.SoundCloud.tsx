import { styles } from './Embed.Styles'
export interface EmbedSoundCloudProps {
  title: string
  width?: string
  height?: string
  url: string
  autoPlay?: boolean
  hideRelated?: boolean
  showComments?: boolean
  showUser?: boolean
  showReposts?: boolean
  visual?: boolean
  color?: string
}

export const EmbedSoundCloud = ({ title, url }: EmbedSoundCloudProps) => {
  const width = '100%'
  const height = '450px'
  const autoPlay = false
  const hideRelated = false
  const showComments = false
  const showUser = true
  const showReposts = false
  const visual = true
  const color = 'ff5500'

  const src = visual
    ? `https://w.soundcloud.com/player/?url=${url}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}&amp;visual=${visual}`
    : `https://w.soundcloud.com/player/?url=${url}&amp;color=${color}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}`

  return (
    <iframe
      title={title}
      width={width}
      height={visual ? height : 'auto'}
      scrolling="no"
      src={src}
      className={styles.iframe}
    />
  )
}

EmbedSoundCloud.displayName = 'Embed.SoundCloud'

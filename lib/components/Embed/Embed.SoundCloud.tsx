import { styles } from './Embed.Styles'
export interface EmbedSoundCloudProps {
  title: string
  url: string
}

export const EmbedSoundCloud = ({ title, url }: EmbedSoundCloudProps) => {
  const src = `https://w.soundcloud.com/player/?url=${url}&amp;color='ff5500'&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true`

  return <iframe title={title} width="100%" src={src} className={styles.iframe} />
}

EmbedSoundCloud.displayName = 'Embed.SoundCloud'

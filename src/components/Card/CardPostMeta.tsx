import { metaStyles } from './Card.Styles'

export interface CardPostMetaProps {
  date?: string | Date
}

export const CardPostMeta = ({ date }: CardPostMetaProps) => {
  const formatedDate = date
    ? new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      })
    : null

  return <time className={`${metaStyles.item} ${metaStyles.italic}`}>{formatedDate}</time>
}

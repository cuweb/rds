import { metaStyles } from './Card.Styles'

export interface CardPeopleMetaProps {
  jobTitle?: string
  email?: string
  phone?: string
}

export const CardPeopleMeta = ({ jobTitle, email, phone }: CardPeopleMetaProps) => {
  return (
    <ul className={metaStyles.list}>
      {jobTitle && <li className={`${metaStyles.font} ${metaStyles.fontLarge} ${metaStyles.italic}`}>{jobTitle}</li>}
      {email && (
        <li className={metaStyles.font}>
          <strong className={`${metaStyles.bold} ${metaStyles.wrap}`}>{email}</strong>
        </li>
      )}
      {phone && <li className={metaStyles.font}>{phone}</li>}
    </ul>
  )
}

CardPeopleMeta.displayName = 'Card.PeopleMeta'

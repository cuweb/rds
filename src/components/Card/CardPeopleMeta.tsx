import { metaStyles } from './Card.Styles'

export interface CardPeopleMetaProps {
  jobTitle?: string
  email?: string
  phone?: string
}

export const CardPeopleMeta = ({ jobTitle, email, phone }: CardPeopleMetaProps) => {
  return (
    <ul className={metaStyles.wrapper}>
      {jobTitle && <li className={`${metaStyles.item} ${metaStyles.itemLarge} ${metaStyles.italic}`}>{jobTitle}</li>}
      {email && (
        <li className={metaStyles.item}>
          <strong className={metaStyles.bold}>{email}</strong>
        </li>
      )}
      {phone && <li className={metaStyles.item}>{phone}</li>}
    </ul>
  )
}

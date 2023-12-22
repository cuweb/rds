export interface CardPeopleMetaProps {
  jobTitle?: string
  email?: string
  phone?: string
}

export const styles = {
  list: ``,
  font: ``,
  bold: ``,
}

export const CardPeopleMeta = ({ jobTitle, email, phone }: CardPeopleMetaProps) => {
  return (
    <ul className="space-y-2 text-sm text-cu-black-600 @sm:md:text-base">
      {jobTitle && <li className="text-base @sm:md:text-lg italic">{jobTitle}</li>}
      {email && (
        <li>
          <strong className="font-semibold break-all">{email}</strong>
        </li>
      )}
      {phone && <li>{phone}</li>}
    </ul>
  )
}

CardPeopleMeta.displayName = 'Card.PeopleMeta'

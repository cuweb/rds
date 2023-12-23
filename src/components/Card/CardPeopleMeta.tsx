export interface CardPeopleMetaProps {
  children: React.ReactNode
  jobTitle?: string
  phone?: string
}

export const styles = {
  list: ``,
  font: ``,
  bold: ``,
}

export const CardPeopleMeta = ({ jobTitle, children, phone }: CardPeopleMetaProps) => {
  return (
    <ul className="space-y-2 text-sm text-cu-black-600 @sm:md:text-base">
      {jobTitle && <li className="text-base @sm:md:text-lg italic">{jobTitle}</li>}
      {children && (
        <li>
          <strong className="font-semibold break-all text-cyan-700 hover:text-cu-red-700">{children}</strong>
        </li>
      )}
      {phone && <li>{phone}</li>}
    </ul>
  )
}

CardPeopleMeta.displayName = 'Card.PeopleMeta'

export interface ListingPeopleMetaProps {
  children?: React.ReactNode
  jobTitle?: string
  phone?: string
}

export const ListingPeopleMeta = ({ jobTitle, children, phone }: ListingPeopleMetaProps) => {
  return (
    <ul className="space-y-3 text-sm text-cu-black-600 @sm:md:text-base list-none">
      {jobTitle && <li className="text-base @sm:md:text-lg italic">{jobTitle}</li>}
      {children && (
        <li>
          <strong className="font-semibold break-all hover:cursor-pointer text-cyan-700 hover:text-cu-red-700">
            {children}
          </strong>
        </li>
      )}
      {phone && <li>{phone}</li>}
    </ul>
  )
}

ListingPeopleMeta.displayName = 'Listing.PeopleMeta'

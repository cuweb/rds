import React from 'react'
import { metaStyles } from './Listing.Styles'

export interface ListingPeopleMetaProps {
  jobTitle?: string
  email?: string
  phone?: string
}

export const ListingPeopleMeta = ({
  jobTitle,
  email,
  phone,
}: ListingPeopleMetaProps) => {
  return (
    <ul className={metaStyles.wrapper}>
      {jobTitle && (
        <li className={`${metaStyles.itemLarge} ${metaStyles.italic}`}>
          {jobTitle}
        </li>
      )}
      {email && (
        <li className={metaStyles.item}>
          <strong className={metaStyles.bold}>{email}</strong>
        </li>
      )}
      {phone && <li className={metaStyles.item}>{phone}</li>}
    </ul>
  )
}

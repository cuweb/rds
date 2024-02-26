import React from 'react'
import { contentStyles } from './HeroTextImage.Styles'

export interface HeroTextImagePeopleProps {
  children?: React.ReactNode
  designation?: string
  title: string
  jobTitle?: string
  pronoun?: string
  degrees?: string
  building?: string
  room?: string
  email?: string
  phone?: string
  phoneExt?: string
}

export const contactInfo = ['degrees', 'building', 'room', 'email', 'phone', 'phoneExt']

export const HeroTextImagePeople = ({
  children,
  designation,
  title,
  jobTitle,
  pronoun,
  ...contactInfo
}: HeroTextImagePeopleProps) => {
  const { degrees, building, room, email, phone, phoneExt } = contactInfo

  return (
    <div className={`${contentStyles.contentWrapper} ${contentStyles.contentTopSpace}`}>
      <h1 className={`${contentStyles.header} ${contentStyles.headerOne}`}>
        {designation && `${designation} `}
        {title} {pronoun && <span className={contentStyles.pronoun}>({pronoun})</span>}
      </h1>
      {jobTitle && <p className={contentStyles.largeText}>{jobTitle}</p>}

      {Object.values(contactInfo).some((info) => info) && (
        <ul>
          {degrees && <li>{degrees}</li>}
          {building && (
            <li>
              {room && `${room} `}
              {building}
            </li>
          )}
          {email && (
            <li>
              <a className={contentStyles.listLink} href={`mailto:${email}`}>
                {email}
              </a>
            </li>
          )}
          {phone && (
            <li>
              {phone}
              {phoneExt && ` x${phoneExt}`}
            </li>
          )}
        </ul>
      )}

      {children}
    </div>
  )
}

HeroTextImagePeople.displayName = 'HeroTextImage.People'

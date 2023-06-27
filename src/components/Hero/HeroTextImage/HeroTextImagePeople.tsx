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

export const proseStyles = {
  base: `prose prose-rds prose-lg md:prose-xl max-w-none prose-img:w-full prose-img:rounded-lg`,
}

export const HeroTextImagePeople = ({
  children,
  designation,
  title,
  jobTitle,
  pronoun,
  degrees,
  building,
  room,
  email,
  phone,
  phoneExt,
}: HeroTextImagePeopleProps) => {
  return (
    <div
      className={`${contentStyles.contentWrapper} ${contentStyles.contentTopSpace}`}
    >
      <h1 className={`${contentStyles.header} ${contentStyles.headerOne}`}>
        {designation && `${designation} `}
        {title}{' '}
        {pronoun && <span className={contentStyles.pronoun}>({pronoun})</span>}
      </h1>
      {jobTitle && <p className={contentStyles.largeText}>{jobTitle}</p>}

      <ul>
        {degrees && <li>{degrees}</li>}
        {building && (
          <li>
            {room && '123-B '}
            {building}
          </li>
        )}
        {email && (
          <li>
            <a
              className="font-semibold text-cu-red hover:text-cyan-600"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </li>
        )}
        {phone && (
          <li>
            {phone}
            {phoneExt && ` ${phoneExt}`}
          </li>
        )}
      </ul>

      {children}
    </div>
  )
}

HeroTextImagePeople.displayName = 'HeroTextImage.People'

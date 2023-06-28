import React from 'react'
import { contentStyles } from './HeroTextImage.Styles'

export interface HeroTextImageEventProps {
  children?: React.ReactNode
  designation?: string
  title: string
  startDate?: string
  endDate?: string
  location?: string
  cost?: string
  contactName?: string
  contactPhone?: string
  contactEmail?: string
}

export const eventContact = ['location', 'cost', 'contactName', 'contactPhone', 'contactEmail']

export const HeroTextImageEvent = ({
  children,
  title,
  startDate,
  endDate,
  location,
  cost,
  ...eventContact
}: HeroTextImageEventProps) => {
  const { contactName, contactPhone, contactEmail } = eventContact

  return (
    <div className={`${contentStyles.contentWrapper} ${contentStyles.contentTopSpace}`}>
      <h1 className={`${contentStyles.header} ${contentStyles.headerOne}`}>{title}</h1>

      {startDate && <p className={contentStyles.largeText}>{startDate}</p>}
      {endDate && <p className={contentStyles.largeText}>{endDate}</p>}

      <ul>
        {location && <li>{location}</li>}
        {cost && <li>{cost}</li>}
      </ul>

      {Object.values(eventContact).some((info) => info) && (
        <>
          <ul>
            <li>
              <strong className="font-semibold">Event Contact</strong>
            </li>
            {contactName && (
              <li>
                {contactName && contactEmail && (
                  <a className={contentStyles.listLink} href={contactEmail}>
                    {contactName}
                  </a>
                )}
                {contactName && !contactEmail && contactName}
                {contactPhone && <>, {contactPhone}</>}
              </li>
            )}
          </ul>
        </>
      )}

      {children}
    </div>
  )
}

HeroTextImageEvent.displayName = 'HeroTextImage.Event'

import { contentStyles } from './HeroTextImage.Styles'
import { ButtonGroup } from '../../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../../components/Button/Button'

export interface HeroTextImageEventProps {
  designation?: string
  title: string
  startDate?: string
  endDate?: string
  location?: string
  primaryButtonUrl?: string
  primaryButtonText?: string
  secondaryButtonUrl?: string
  secondaryButtonText?: string
  cost?: string
  contactName?: string
  contactPhone?: string
  contactEmail?: string
}

export const HeroTextImageEvent = ({
  title,
  startDate,
  endDate,
  location,
  primaryButtonUrl,
  primaryButtonText,
  secondaryButtonUrl,
  secondaryButtonText,
  cost,
  contactName,
  contactPhone,
  contactEmail,
}: HeroTextImageEventProps) => {
  return (
    <div className={`${contentStyles.contentWrapper} ${contentStyles.contentTopSpace}`}>
      <h1 className={`${contentStyles.header} ${contentStyles.headerOne}`}>{title}</h1>

      {startDate && <p className={contentStyles.largeText}>{startDate}</p>}
      {endDate && <p className={contentStyles.largeText}>{endDate}</p>}

      {(location || cost) && (
        <ul>
          {location && <li>{location}</li>}
          {cost && <li>{cost}</li>}
        </ul>
      )}

      {(contactName || contactPhone || contactEmail) && (
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

      {primaryButtonUrl && secondaryButtonUrl && (
        <ButtonGroup>
          {primaryButtonUrl && (
            <Button
              isSmall
              onClick={() => {
                if (typeof primaryButtonUrl === 'string') {
                  window.location.href = primaryButtonUrl
                }
              }}
              title={primaryButtonText ? primaryButtonText : 'Register Now'}
            />
          )}
          {secondaryButtonUrl && secondaryButtonText && (
            <Button
              isSmall
              color="grey"
              onClick={() => {
                if (typeof secondaryButtonUrl === 'string') {
                  window.location.href = secondaryButtonUrl
                }
              }}
              title={secondaryButtonText}
            />
          )}
        </ButtonGroup>
      )}
    </div>
  )
}

HeroTextImageEvent.displayName = 'HeroTextImage.Event'

import { contentStyles } from './HeroTextImage.Styles'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../components/Button/Button'
export interface HeroTextImageEventProps {
  designation?: string
  title: string
  startDate?: string
  endDate?: string
  eventType: 'In-Person' | 'Virtual' | 'Hybrid'
  location?: string
  virtualType?: 'Teams' | 'Zoom'
  virtualUrl?: string
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
  eventType,
  location,
  virtualType,
  virtualUrl,
  cost,
  contactName,
  contactPhone,
  contactEmail,
  primaryButtonUrl,
  primaryButtonText,
  secondaryButtonUrl,
  secondaryButtonText,
}: HeroTextImageEventProps) => {
  return (
    <div className={`${contentStyles.contentWrapper} ${contentStyles.contentTopSpace}`}>
      <h1 className={`${contentStyles.header} ${contentStyles.headerOne}`}>{title}</h1>
      {startDate && <p className={contentStyles.largeText}>{startDate}</p>}
      {endDate && <p className={contentStyles.largeText}>{endDate}</p>}
      <ul className={contentStyles.listItems}>
        <li>
          <strong className="font-semibold">{eventType} Event</strong>
        </li>
        {(eventType === 'In-Person' || eventType === 'Hybrid') && location && <li>{location}</li>}
        {(eventType === 'Virtual' || eventType === 'Hybrid') && virtualType && virtualUrl && (
          <li>
            <a className={contentStyles.listLink} href={virtualUrl}>
              {virtualType} meeting link
            </a>
          </li>
        )}
        {(eventType === 'Virtual' || eventType === 'Hybrid') && virtualType && !virtualUrl && (
          <li>Meeting link is not yet available</li>
        )}
      </ul>
      {(cost || contactName || contactPhone || contactEmail) && (
        <>
          <ul className={contentStyles.listItems}>
            {cost && (
              <li>
                <strong className="font-semibold">Cost: </strong>
                {cost}
              </li>
            )}
            {contactName && (
              <li>
                <strong className="font-semibold">Contact: </strong>
                {contactName && <> {contactName}</>}
                {contactEmail && (
                  <>
                    {' | '}
                    <a className={contentStyles.listLink} href={`mailto:${contactEmail}`}>
                      {contactEmail}
                    </a>
                  </>
                )}
                {contactPhone && <> | {contactPhone}</>}
              </li>
            )}
          </ul>
        </>
      )}
      {primaryButtonUrl && (
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

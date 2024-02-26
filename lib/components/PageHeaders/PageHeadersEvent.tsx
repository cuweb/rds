import { listStyles } from './PageHeaders.Styles'
import { proseStyles, proseGroups } from '../../utils/globalClasses'
import { Button } from '../Button/Button'

export interface PageHeadersEventProps {
  children?: React.ReactNode
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

export const PageHeadersEvent = ({
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
}: PageHeadersEventProps) => {
  const eventDetails = ['cost', 'contactName', 'contactPhone', 'contactEmail']

  return (
    <>
      {startDate && <p className={proseGroups.largeLight}>{startDate}</p>}
      {endDate && <p className={proseGroups.largeLight}>{endDate}</p>}

      {/* Check if details are set and output as ul */}
      <div className={`${listStyles.listWrapper} ${proseStyles.base}`}>
        <ul className={listStyles.listVertical}>
          <li>
            <strong className="font-semibold">{eventType} Event</strong>
          </li>
          {(eventType === 'In-Person' || eventType === 'Hybrid') && location && <li>{location}</li>}
          {(eventType === 'Virtual' || eventType === 'Hybrid') && virtualType && virtualUrl && (
            <li>
              <a className={listStyles.listLink} href={virtualUrl}>
                {virtualType} meeting link
              </a>
            </li>
          )}
          {(eventType === 'Virtual' || eventType === 'Hybrid') && virtualType && !virtualUrl && (
            <li>Meeting link is not yet available</li>
          )}
          {cost && (
            <li>
              <strong className="font-semibold">Cost: </strong>
              {cost}
            </li>
          )}
        </ul>
      </div>

      {/* Check is socials are set and render div */}
      {Object.values(eventDetails).some((info) => info) && (
        <div className={`${listStyles.listWrapper} ${proseStyles.base}`}>
          <ul className={listStyles.listVertical}>
            {contactName && (
              <li>
                <strong className="block font-semibold">Contact:</strong>
                {contactName && contactName}
                {contactEmail && (
                  <>
                    ,{' '}
                    <a className={listStyles.listLink} href={`mailto:${contactEmail}`}>
                      {contactEmail}
                    </a>
                  </>
                )}
                {contactPhone && <>, {contactPhone}</>}
              </li>
            )}
          </ul>
        </div>
      )}

      {primaryButtonUrl && (
        <div className={listStyles.listWrapper}>
          <ul className={listStyles.listHorizontal}>
            {primaryButtonUrl && (
              <li>
                <Button
                  isSmall
                  onClick={() => {
                    if (typeof primaryButtonUrl === 'string') {
                      window.location.href = primaryButtonUrl
                    }
                  }}
                  title={primaryButtonText ? primaryButtonText : 'Register Now'}
                />
              </li>
            )}
            {secondaryButtonUrl && (
              <li>
                <Button
                  isSmall
                  color="grey"
                  onClick={() => {
                    if (typeof secondaryButtonUrl === 'string') {
                      window.location.href = secondaryButtonUrl
                    }
                  }}
                  title={secondaryButtonText ? secondaryButtonText : 'More Information'}
                />
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  )
}

PageHeadersEvent.displayName = 'PageHeaders.Event'

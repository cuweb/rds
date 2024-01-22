import { listStyles } from './PageHeaders.Styles'
import { proseGroups } from '../../utils/globalClasses'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

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
  children,
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
      <ul className={listStyles.listGroup}>
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
      </ul>

      {/* Check is socials are set and render div */}
      {Object.values(eventDetails).some((info) => info) && (
        <ul className={`${listStyles.listGroup} mt-6 mb-10`}>
          {cost && (
            <li>
              <strong className="font-semibold">Cost: </strong>
              {cost}
            </li>
          )}
          {contactName && (
            <li>
              <strong className="font-semibold">Contact: </strong>
              {contactName && contactName}
              {contactEmail && (
                <>
                  {' | '}
                  <a className={listStyles.listLink} href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </>
              )}
              {contactPhone && <> | {contactPhone}</>}
            </li>
          )}
        </ul>
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
          {secondaryButtonUrl && (
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
          )}
        </ButtonGroup>
      )}

      {startDate && (
        <div className="flex-none not-prose w-28 sm:w-48 md:w-72 lg:w-96">
          <div className="overflow-hidden rounded-lg">{children}</div>
        </div>
      )}
    </>
  )
}

PageHeadersEvent.displayName = 'PageHeaders.Event'

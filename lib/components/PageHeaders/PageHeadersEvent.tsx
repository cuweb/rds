import { format, isSameDay, parseISO } from 'date-fns'
import { listStyles } from './PageHeaders.Styles'
import { proseStyles, proseGroups } from '../../utils/globalClasses'

export interface PageHeadersEventProps {
  children?: React.ReactNode
  startDate?: string
  endDate?: string
  eventType: 'In-Person' | 'Virtual' | 'Hybrid'
  location?: string
  virtualType?: 'Teams' | 'Zoom'
  virtualUrl?: string
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
}: PageHeadersEventProps) => {
  const eventDetails = ['cost', 'contactName', 'contactPhone', 'contactEmail']

  // Parse dates
  const parsedStartDate = startDate ? parseISO(startDate) : null
  const parsedEndDate = endDate ? parseISO(endDate) : null

  // Compare dates and build final one
  let finalDate = ''
  if (parsedStartDate && parsedEndDate) {
    if (isSameDay(parsedStartDate, parsedEndDate)) {
      finalDate = `${format(parsedStartDate, 'EEEE, MMMM do, yyyy')} from ${format(parsedStartDate, 'h:mmaaa')} to ${format(parsedEndDate, 'h:mmaaa')}`
    } else {
      finalDate = `${format(parsedStartDate, 'EEEE, MMMM do, yyyy')} at ${format(parsedStartDate, 'h:mmaaa')} to ${format(parsedEndDate, 'EEEE, MMMM do, yyyy')} at ${format(parsedEndDate, 'h:mmaaa')}`
    }
  }

  return (
    <>
      {finalDate && <p className={proseGroups.largeLight}>{finalDate}</p>}

      {/* Check if details are set and output as ul */}
      <div className={`${listStyles.listWrapper} ${proseStyles.base}`}>
        <ul>
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
          <ul>
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
                {contactPhone && (
                  <>
                    , <span className="whitespace-nowrap">{contactPhone}</span>
                  </>
                )}
              </li>
            )}
          </ul>
        </div>
      )}

      {children}

      {/* {(primaryButtonUrl || secondaryButtonUrl) && (
        <div className={listStyles.listWrapper}>
          <ul className={listStyles.listHorizontal}>
            {primaryButtonUrl && (
              <li>
                <Button
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
      )} */}
    </>
  )
}

PageHeadersEvent.displayName = 'PageHeaders.Event'

import { styles } from './TextImage.Styles'
import { proseGroups } from '../../utils/globalClasses'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

export interface TextImageEventProps {
  children?: React.ReactNode
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

export const TextImageEvent = ({
  children,
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
}: TextImageEventProps) => {
  const eventDetails = ['cost', 'contactName', 'contactPhone', 'contactEmail']

  return (
    <>
      <div className="flex-1 space-y-6 md:py-4 not-prose">
        <h1 className={`${styles.headerOne} ${styles.underline}`}>{title}</h1>

        {startDate && <p className={proseGroups.largeLight}>{startDate}</p>}
        {endDate && <p className={proseGroups.largeLight}>{endDate}</p>}

        {/* Check if details are set and output as ul */}
        <ul>
          <li>
            <strong className="font-semibold">{eventType} Event</strong>
          </li>
          {(eventType === 'In-Person' || eventType === 'Hybrid') && location && <li>{location}</li>}
          {(eventType === 'Virtual' || eventType === 'Hybrid') && virtualType && virtualUrl && (
            <li>
              <a className={styles.listLink} href={virtualUrl}>
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
          <ul>
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
                    <a className={styles.listLink} href={`mailto:${contactEmail}`}>
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

      {startDate && (
        <div className="flex-none not-prose w-28 sm:w-48 md:w-72 lg:w-96">
          <div className="overflow-hidden rounded-lg">{children}</div>
        </div>
      )}
    </>
  )
}

TextImageEvent.displayName = 'TextImage.Event'

import { PropsWithChildren } from 'react'
import './styles.css' // Importing the dedicated CSS file

export interface TimelineEventProps {
  date: string
  title: string
  description: string
}

export const TimelineEvent = ({ date, title, description }: TimelineEventProps) => {
  return (
    <li className="timeline-list-item">
      <span className="timeline-date">{date}</span>
      <div className="timeline-content">
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-description">{description}</p>
      </div>
    </li>
  )
}

export interface TimelineProps {
  events: TimelineEventProps[]
}

export const Timeline = ({ events }: PropsWithChildren<TimelineProps>) => {
  return (
    <div className="timeline-wrapper">
      <ul className="timeline-ul">
        {events.map((event, index) => (
          <TimelineEvent key={index} date={event.date} title={event.title} description={event.description} />
        ))}
      </ul>
    </div>
  )
}

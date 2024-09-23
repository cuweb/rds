import { PropsWithChildren, ReactNode } from 'react'
import './styles.css' // Importing the dedicated CSS file

// Timeline Item Props
export interface TimelineItemProps {
  aside: string
  title: string
  description: string
}

// Timeline.Item Component
export const TimelineItem = ({ aside, title, description }: TimelineItemProps) => {
  return (
    <li className="timeline-list-item">
      <span className="timeline-aside">{aside}</span>
      <div className="timeline-content">
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-description">{description}</p>
      </div>
    </li>
  )
}

// Timeline Wrapper Props
export interface TimelineProps {
  children: ReactNode
}

// Timeline Wrapper Component
export const Timeline = ({ children }: PropsWithChildren<TimelineProps>) => {
  return (
    <div className="timeline-wrapper">
      <ul className="timeline-ul">{children}</ul>
    </div>
  )
}

// Assign TimelineItem as Subcomponent of Timeline
Timeline.Item = TimelineItem

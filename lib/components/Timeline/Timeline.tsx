import { TimelineItem } from './TimelineItem'

export interface TimelineProps {
  children: React.ReactNode
}

// Timeline Wrapper Component
export const TimelineWrapper = ({ children }: TimelineProps) => {
  return <div className="cu-timeline relative">{children}</div>
}

export const Timeline = Object.assign(TimelineWrapper, {
  Item: TimelineItem,
})

TimelineWrapper.displayName = 'Timeline'

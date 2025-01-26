import { format, isSameDay, parseISO } from 'date-fns'

export interface PageHeaderEventProps {
  children?: React.ReactNode
  startDate?: string
  endDate?: string
}

export const PageHeaderEvent = ({ startDate, endDate }: PageHeaderEventProps) => {
  // Parse dates
  const parsedStartDate = startDate ? parseISO(startDate) : null
  const parsedEndDate = endDate ? parseISO(endDate) : null

  // Compare dates and build final one
  let finalDate = ''
  if (parsedStartDate && parsedEndDate) {
    if (isSameDay(parsedStartDate, parsedEndDate)) {
      finalDate = `${format(parsedStartDate, 'EEEE, MMMM d, yyyy')} from ${format(parsedStartDate, 'h:mmaaa')} to ${format(parsedEndDate, 'h:mmaaa')}`
    } else {
      finalDate = `${format(parsedStartDate, 'EEEE, MMMM d, yyyy')} at ${format(parsedStartDate, 'h:mmaaa')} to ${format(parsedEndDate, 'EEEE, MMMM d, yyyy')} at ${format(parsedEndDate, 'h:mmaaa')}`
    }
  }

  return <p>{finalDate}</p>
}

PageHeaderEvent.displayName = 'PageHeader.Event'

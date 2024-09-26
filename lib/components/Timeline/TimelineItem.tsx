import { PageHeader } from '../PageHeader/PageHeader'
export interface TimelineItemProps {
  title: string
  headerType?: 'h2' | 'h3'
  children?: React.ReactNode
  aside: string
}

export const TimelineItem = ({ title, headerType = 'h2', children, aside }: TimelineItemProps) => {
  return (
    <div className="cu-timeline-item flex md:gap-10 flex-col md:flex-row border-l border-cu-black-100 border-solid md:border-none">
      <div className="flex-none w-full max-w-60 md:text-right md:border-r md:border-cu-black-100 md:border-solid">
        <p className="cu-timeline-aside not-prose relative mt-4 md:mt-0 md:py-6 text-base italic text-cu-black-500 md:pr-10 pl-6 md:pl-0">
          {aside}
        </p>
      </div>

      <div className="cu-prose cu-prose-dark cu-prose-first-last flex-1 mt-5 lg:mt-3.5 pb-10 pl-6 md:pl-0">
        <PageHeader as={headerType} header={title} noUnderline size="sm" />
        {children && children}
      </div>
    </div>
  )
}

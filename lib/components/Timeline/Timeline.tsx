import { PropsWithChildren, ReactNode } from 'react'
export interface TimelineProps {
  children: ReactNode
}

// Timeline Wrapper Component
export const Timeline = ({ children }: PropsWithChildren<TimelineProps>) => {
  return (
    <div className="relative py-10 w-full bg-gray-100">
      <ul className="list-none p-0 m-0 relative border-l-2 border-gray-300 w-[60%] mx-auto">{children}</ul>
    </div>
  )
}

import { DescriptionAccordian } from './DescriptionAccordian'

export interface DescriptionProps {
  children: React.ReactNode
  className?: string
}

export const DescriptionWrapper = ({ children, className }: DescriptionProps) => {
  return <div className={className}>{children}</div>
}

export const Description = Object.assign(DescriptionWrapper, {
  Accordian: DescriptionAccordian,
})

import { DescriptionAccordion } from './DescriptionAccordion'
import { DescriptionMeta } from './DescriptionMeta'
import { proseStyles } from '../../utils/globalClasses'

export interface DescriptionProps {
  children: React.ReactNode
}

export const DescriptionWrapper = ({ children }: DescriptionProps) => {
  return <dl className={`cu-description ${proseStyles.base}`}>{children}</dl>
}

export const Description = Object.assign(DescriptionWrapper, {
  Accordion: DescriptionAccordion,
  Meta: DescriptionMeta,
})

import { DescriptionLoaderAccordion } from './DescriptionLoaderAccordion'
import { DescriptionLoaderMeta } from './DescriptionLoaderMeta'

export interface DescriptionLoader {
  children: React.ReactNode
}

export const DescriptionLoaderWrapper = ({ children }: DescriptionLoader) => {
  return <dl className="cu-block-spacing">{children}</dl>
}

export const DescriptionLoader = Object.assign(DescriptionLoaderWrapper, {
  Accordion: DescriptionLoaderAccordion,
  Meta: DescriptionLoaderMeta,
})

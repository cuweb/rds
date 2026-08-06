import { DescriptionLoaderAccordion } from './DescriptionLoaderAccordion'
import { DescriptionLoaderMeta } from './DescriptionLoaderMeta'

export interface DescriptionLoader {
  children: React.ReactNode
}

export const DescriptionLoaderWrapper = ({ children }: DescriptionLoader) => {
  return <dl className="cu-loader cu-loader--description cu-component-updated cu-block-spacing">{children}</dl>
}

export const DescriptionLoader = Object.assign(DescriptionLoaderWrapper, {
  Accordion: DescriptionLoaderAccordion,
  Meta: DescriptionLoaderMeta,
})

import { DescriptionAccordian } from './DescriptionAccordian'
import { DescriptionMeta } from './DescriptionMeta'

export interface DescriptionProps {
  children: React.ReactNode
  divider?: boolean
}

export const DescriptionWrapper = ({ children, divider }: DescriptionProps) => {
  const addClass = divider ? 'divide-y divide-gray-900/10' : ''

  return (
    <>
      <dl className={`${addClass} mt-10 space-y-6`}>
        <div className={` pt-6`}> {children}</div>
      </dl>
    </>
  )
}

export const Description = Object.assign(DescriptionWrapper, {
  Accordian: DescriptionAccordian,
  Meta: DescriptionMeta,
})

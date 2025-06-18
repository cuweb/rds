import { styles } from './Description.Styles'
import { toggleAccordion } from './script'
import { Icon } from '../Icon/Icon'

export interface DescriptionAccordionProps {
  term: string
  children: React.ReactNode
}

export const DescriptionAccordion = ({ term, children }: DescriptionAccordionProps) => {
  const termLabel = term && typeof term === 'string' ? 'accordion-' + term.toLowerCase().replace(/ +/g, '-') : ''

  return (
    <div className={`accordion ${styles.base} first:border-t`}>
      <dt className={`${styles.term}`}>
        <div
          className="flex items-center w-full accordion__button"
          aria-expanded="false"
          aria-controls={termLabel}
          role="button"
          onClick={toggleAccordion}
        >
          {term}
          <Icon
            name="chevron-right"
            className="w-5 h-5 ml-auto transition-transform rotate-0 accordion__icon text-cu-black-500"
          />
        </div>
      </dt>

      <dd className={`accordion__content ${styles.desc}`} hidden={true} id={termLabel}>
        {children}
      </dd>
    </div>
  )
}

DescriptionAccordion.displayName = 'Description.Accordion'

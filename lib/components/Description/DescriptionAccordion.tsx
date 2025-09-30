import { styles } from './Description.Styles'
import { Icon } from '../Icon/Icon'
import { toggleAccordion } from './script'

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
            iconPath="/assets/font-awesome/"
            name="chevron-right"
            size={20}
            className="ml-auto transition-transform rotate-0 accordion__icon"
            color="#808080"
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

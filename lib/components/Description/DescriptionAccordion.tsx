import { styles } from './Description.Styles'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { proseStyles } from '../../utils/globalClasses'
import { toggleAccordion } from './script'

export interface DescriptionAccordionProps {
  term: string
  children: React.ReactNode
}

export const DescriptionAccordion = ({ term, children }: DescriptionAccordionProps) => {
  const termLabel = term && typeof term === 'string' ? 'accordion-' + term.toLowerCase().replace(/ +/g, '-') : ''

  return (
    <>
      <div className={`accordion ${styles.base} first:border-t`}>
        <dt className={`${styles.term} ${proseStyles.base}`}>
          <button
            className="flex items-center w-full accordion__button"
            aria-expanded="false"
            aria-controls={termLabel}
            onClick={toggleAccordion}
          >
            {term}
            <ChevronRightIcon className="w-5 h-5 ml-auto transition-transform rotate-0 accordion__icon text-cu-black-500" />
          </button>
        </dt>

        <dd className={`accordion__content ${styles.desc}`} hidden={true} id={termLabel}>
          {children}
        </dd>
      </div>
    </>
  )
}

DescriptionAccordion.displayName = 'Description.Accordion'

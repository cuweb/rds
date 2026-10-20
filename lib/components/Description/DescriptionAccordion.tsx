import { useState } from 'react'
import { styles } from './Description.Styles'
import { Icon } from '../Icon/Icon'

export interface DescriptionAccordionProps {
  term: string
  children: React.ReactNode
}

export const DescriptionAccordion = ({ term, children }: DescriptionAccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const termLabel = term && typeof term === 'string' ? 'accordion-' + term.toLowerCase().replace(/ +/g, '-') : ''

  return (
    <div className={`accordion ${styles.base} first:border-t`}>
      <dt className={`${styles.term}`}>
        <div
          className="flex items-center w-full accordion__button"
          aria-expanded={isExpanded}
          aria-controls={termLabel}
          role="button"
          tabIndex={0}
          onClick={() => setIsExpanded((expanded) => !expanded)}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              setIsExpanded((expanded) => !expanded)
            }
          }}
        >
          {term}
          <Icon
            name="chevron-right"
            size={20}
            className={`ml-auto transition-transform ${isExpanded ? 'rotate-90' : 'rotate-0'} accordion__icon`}
            color="#808080"
          />
        </div>
      </dt>

      <dd className={`accordion__content ${styles.desc}`} hidden={!isExpanded} id={termLabel}>
        {children}
      </dd>
    </div>
  )
}

DescriptionAccordion.displayName = 'Description.Accordion'

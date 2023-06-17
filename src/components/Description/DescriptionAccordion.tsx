import { useState } from 'react'
import { styles } from './Description.Styles'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { proseStyles } from '../../utils/globalClasses'

export interface DescriptionAccordionProps {
  term: string
  children: React.ReactNode
}

export const DescriptionAccordion = ({ term, children }: DescriptionAccordionProps) => {
  const [ariaExpanded, setAriaExpanded] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
  const [hidden, setHidden] = useState(true)

  const onContentToggle = () => {
    setAriaExpanded((current) => !current)
    setCollapsed((current) => !current)
    setHidden((current) => !current)
  }

  const termLabel = term.toLowerCase().replace(/ +/g, '-')

  return (
    <div className={`${styles.base} ${styles.accordion}`}>
      <dt className={`${styles.term} ${proseStyles.base}`}>
        <button className={styles.button} id={termLabel} aria-expanded={ariaExpanded} onClick={onContentToggle}>
          {term}
          <ChevronRightIcon className={`${styles.chevron} ${collapsed ? 'rotate-0' : 'rotate-90'}`} />
        </button>
      </dt>

      <dd className={`${proseStyles.base} ${styles.accordionDef}`} hidden={hidden}>
        {children}
      </dd>
    </div>
  )
}

DescriptionAccordion.displayName = 'Description.Accordion'

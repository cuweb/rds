import { styles } from './Description.Styles'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { proseStyles } from '../../utils/globalClasses'
import { Helmet } from 'react-helmet'
export interface DescriptionAccordionProps {
  term: string
  children: React.ReactNode
}

export const DescriptionAccordion = ({ term, children }: DescriptionAccordionProps) => {
  const termLabel = term && typeof term === 'string' ? 'accordion-' + term.toLowerCase().replace(/ +/g, '-') : ''

  return (
    <>
      <Helmet>
        <script src="./src/components/Description/script.js" type="text/javascript" />
      </Helmet>
      <div className={`accordion ${styles.base} ${styles.accordion}`}>
        <dt className={`${styles.term} ${proseStyles.base}`}>
          <button className={`accordion__button ${styles.button}`} aria-expanded="false" aria-controls={termLabel}>
            {term}
            <ChevronRightIcon className={`accordion__icon ${styles.chevron} rotate-0}`} />
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

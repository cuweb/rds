import { styles } from './Description.Styles'
import { proseStyles } from '../../utils/globalClasses'

export interface DescriptionMetaProps {
  term?: string
  children: React.ReactNode
  useColumns?: boolean
}

export const DescriptionMeta = ({ term, children, useColumns }: DescriptionMetaProps) => {
  const columns = useColumns ? styles.flexRow : styles.flexCol

  return (
    <div className={`${styles.base} ${columns}`}>
      <dt className={styles.term}>{term}</dt>
      <dd className={`${styles.def} ${proseStyles.base}`}>{children}</dd>
    </div>
  )
}

DescriptionMeta.displayName = 'Description.Meta'

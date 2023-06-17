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
    <div className={`${styles.base} ${columns} ${styles.spacing}`}>
      <dt className={`${styles.term} ${proseStyles.base}`}>{term}</dt>
      <dd className={proseStyles.base}>{children}</dd>
    </div>
  )
}

DescriptionMeta.displayName = 'Description.Meta'

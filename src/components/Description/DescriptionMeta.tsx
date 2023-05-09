import { styles } from './Description.Styles'

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
      <dd>{children}</dd>
    </div>
  )
}

DescriptionMeta.displayName = 'Description.Meta'

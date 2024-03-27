import { styles } from './Description.Styles'

export interface DescriptionMetaProps {
  term?: string
  children: React.ReactNode
  hasBorder?: boolean
  useColumns?: boolean
  isSmall?: boolean
}

export const DescriptionMeta = ({ term, children, hasBorder, useColumns, isSmall }: DescriptionMetaProps) => {
  const topBorder = hasBorder ? 'first:border-t' : 'first:pt-0'
  const columns = useColumns ? styles.flexRow : styles.flexCol
  const smallText = isSmall ? `${styles.textSmall} ${styles.spacingSmall}` : `${styles.textBase} ${styles.spacingBase}`

  return (
    <div className={`${styles.base} ${columns} ${topBorder} ${smallText}`}>
      <dt className={`${styles.term}`}>{term}</dt>
      <dd className={`${styles.desc}`}>{children}</dd>
    </div>
  )
}

DescriptionMeta.displayName = 'Description.Meta'

import { styles } from './Description.Styles'

export interface DescriptionMetaProps {
  term?: string
  children: React.ReactNode
  useColumns?: boolean
}

export const DescriptionMeta = ({ term, children, useColumns }: DescriptionMetaProps) => {
  const columns = useColumns ? 'md:grid-cols-left-260 gap-2 md:gap-6' : 'grid-row gap-2'

  return (
    <div className={`${styles.base} ${styles.baseMeta} ${columns}`}>
      <dt className={`${styles.term}`}>{term}</dt>
      <dd className={`cu-prose cu-prose-first-last ${styles.desc}`}>{children}</dd>
    </div>
  )
}

DescriptionMeta.displayName = 'Description.Meta'

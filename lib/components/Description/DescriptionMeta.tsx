import { styles } from './Description.Styles'

export interface DescriptionMetaProps {
  term?: string
  children: React.ReactNode
  useColumns?: boolean
  spacing?: 'default' | 'tight'
}

export const DescriptionMeta = ({ term, children, useColumns, spacing = 'default' }: DescriptionMetaProps) => {
  const columns = useColumns ? 'md:grid-cols-left-260 gap-2 md:gap-6' : 'grid-row gap-2'
  const spaceType = spacing === 'default' ? 'py-4 md:py-6' : 'py-2.5 md:py-3.5'

  return (
    <div className={`${styles.base} ${styles.baseMeta} ${columns} ${spaceType}`}>
      <dt className={`${styles.term}`}>{term}</dt>
      <dd className={`${styles.desc}`}>{children}</dd>
    </div>
  )
}

DescriptionMeta.displayName = 'Description.Meta'

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
  const columns = useColumns ? 'md:grid-cols-left-260 gap-2 md:gap-6' : 'grid-row gap-2'
  const textSize = isSmall
    ? 'text-base md:text-lg pt-6 pb-6'
    : 'prose prose-lg md:prose-xl prose-rds max-w-none pt-8 pb-8'

  return (
    <div className={`${styles.base} ${columns} ${topBorder} ${textSize}`}>
      <dt className={`${styles.term}`}>{term}</dt>
      <dd className={`${styles.desc}`}>{children}</dd>
    </div>
  )
}

DescriptionMeta.displayName = 'Description.Meta'

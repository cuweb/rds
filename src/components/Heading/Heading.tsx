import { rdsMaxWidth } from '../../utils/optionClasses'
import { styles } from './Heading.Styles'

export interface HeadingProps {
  text: string
  intro?: string
  isCenter?: boolean
  maxWidth?: 'full' | '5xl' | '7xl'
}

export const Heading = ({ text, intro, isCenter, maxWidth = '5xl' }: HeadingProps) => {
  const centerText = isCenter ? 'text-center mx-auto max-w-4xl after:left-1/2 after:-ml-5' : 'max-w-4xl after:left-px'

  return (
    <header className={`cu-heading not-contained not-prose ${styles.core} ${rdsMaxWidth[maxWidth]} ${styles.spacing}`}>
      <h2 className={`relative ${styles.header} ${styles.underline} ${centerText}`}>{text}</h2>
      {intro && <p className={`${centerText} ${styles.paragraph}`}>{intro}</p>}
    </header>
  )
}

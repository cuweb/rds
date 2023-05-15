import { rdsMaxWidth } from '../../utils/optionClasses'
import { styles } from './Heading.Styles'

export interface HeadingProps {
  text: string
  intro?: string
  isCenter?: boolean
  maxWidth?: 'full' | '5xl' | '7xl'
}

export const Heading = ({ text, intro, isCenter, maxWidth = '5xl' }: HeadingProps) => {
  const centerText = isCenter ? 'text-center mx-auto' : ''
  const centerUnderline = isCenter ? 'after:left-1/2 after:-ml-5' : 'after:left-px'

  return (
    <header
      className={`cu-heading not-contained mx-auto ${styles.prose} ${styles.heading} ${styles.paragraph} ${rdsMaxWidth[maxWidth]} ${styles.spacing}`}
    >
      <h2 className={`relative ${centerText} ${styles.underline} ${centerUnderline}`}>{text}</h2>
      {intro && <p className={`max-w-4xl ${centerText}`}>{intro}</p>}
    </header>
  )
}

import { rdsMaxWidth } from '../../utils/optionClasses'
import { styles } from './Heading.Styles'

export interface HeadingProps {
  text: string
  intro?: string
  isCenter?: boolean
  maxWidth?: 'full' | '5xl' | '7xl'
}

// Utility function to transform text
function transformText(inputText: string) {
  let transformedText = inputText.toLowerCase() // Convert to lower case
  transformedText = transformedText.replace(/[^a-z0-9\s]/g, '') // Strip out special characters
  transformedText = transformedText.replace(/\s+/g, '-') // Replace spaces with dashes

  return transformedText
}

export const Heading = ({ text, intro, isCenter, maxWidth = '5xl' }: HeadingProps) => {
  const centerText = isCenter ? 'text-center mx-auto max-w-4xl after:left-1/2 after:-ml-5' : 'max-w-4xl after:left-px'
  const transformedText = transformText(text)

  return (
    <header className={`cu-heading not-contained not-prose ${styles.core} ${rdsMaxWidth[maxWidth]} ${styles.spacing}`}>
      <h2 id={transformedText} className={`relative ${styles.header} ${styles.underline} ${centerText}`}>
        {text}
      </h2>
      {intro && <p className={`${centerText} ${styles.paragraph}`}>{intro}</p>}
    </header>
  )
}

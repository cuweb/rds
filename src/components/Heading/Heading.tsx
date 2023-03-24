import { rdsMaxWidth } from '../../utils/optionClasses'

export interface HeadingProps {
  text: string
  intro?: string
  isCenter?: boolean
  maxWidth?: 'full' | '5xl' | '7xl'
}

const styles = {
  prose: `prose prose-lg md:prose-xl`,
  spacing: `pt-10 pb-2.5 md:pt-14`,
  heading: `prose-headings:font-semibold prose-headings:text-cu-black-800 prose-headings:mb-8 prose-headings:pb-6 prose-headings:mb-0`,
  underline: `after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red`,
  paragraph: `prose-p:md:text-[22px] prose-p:leading-9 prose-p:text-cu-black-800`,
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

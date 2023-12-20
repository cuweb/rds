import { styles, button } from './Card.Styles'

export interface CardDescriptionProps {
  text: string
  buttonText?: string
  buttonLink?: string
}

export const CardDescription = ({ text, buttonText, buttonLink }: CardDescriptionProps) => {
  return (
    <>
      <p className={styles.excerpt}>{text.length > 110 ? `${text.substring(0, 110)}...` : text}</p>
      {buttonText && (
        <a className={`${button.button} ${button.border}`} href={buttonLink}>
          {buttonText}
        </a>
      )}
    </>
  )
}

CardDescription.displayName = 'Card.Description'

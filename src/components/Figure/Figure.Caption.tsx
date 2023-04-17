import { styles } from './Figure.Styles'

export interface FigureCaptionProps {
  text: string
}

export const FigureCaption = ({ text }: FigureCaptionProps) => {
  return <figcaption>{text}</figcaption>
}

FigureCaption.displayName = 'Figure.Caption'

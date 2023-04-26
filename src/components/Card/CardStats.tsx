import { statStyle } from './Card.Styles'

export interface CardStatsProps {
  stat: string
  desc: string
}

export const CardStats = ({ stat, desc }: CardStatsProps) => {
  return (
    <>
      <p className={`${statStyle.desc}`}>{desc}</p>
      <h2 className={statStyle.header}>{stat}</h2>
    </>
  )
}

CardStats.displayName = 'Card.Stats'

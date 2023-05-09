import { statStyle } from './Card.Styles'

export interface CardStatsProps {
  stat: string
  desc: string
  reverse?: boolean
}

export const CardStats = ({ stat, desc, reverse }: CardStatsProps) => {
  const contentDirection = reverse ? statStyle.flexColReverse : statStyle.flexCol

  return (
    <div className={contentDirection}>
      <p className={`${statStyle.desc}`}>{desc}</p>
      <h2 className={statStyle.header}>{stat}</h2>
    </div>
  )
}

CardStats.displayName = 'Card.Stats'

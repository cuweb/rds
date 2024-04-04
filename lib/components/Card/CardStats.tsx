export interface CardStatsProps {
  stat: string
  desc: string
  reverse?: boolean
}

export const CardStats = ({ stat, desc, reverse }: CardStatsProps) => {
  const contentDirection = reverse ? 'flex flex-col-reverse gap-2' : 'flex flex-col gap-2'

  const truncatedDesc = desc && desc.length > 80 ? `${desc.substring(0, 80)}...` : desc
  const truncatedStat = stat && stat.length > 60 ? `${stat.substring(0, 60)}...` : stat

  return (
    <div className={`${contentDirection} cu-card-stats px-6 py-4 overflow-hidden`}>
      <p className="text-base text-cu-black-600 @sm:md:text-lg">{truncatedDesc}</p>
      <p className="text-2xl font-semibold text-cu-black-800 group-hover:text-cu-red md:text-3xl @xs:lg:text-4xl">
        {truncatedStat}
      </p>
    </div>
  )
}

CardStats.displayName = 'Card.Stats'

import { formatCurrency } from '../../helpers/formatCurrency'
import { Column } from '../../layouts/Column/Column'
import { Card } from '../Card/Card'

interface CampaignBannerStatsProps {
  raised: number
  goal: number
  endDate: string
}

const parseDateLocal = (dateStr: string): Date => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const getTimeRemainingLabel = (endDate: string): string => {
  const daysLeft = Math.ceil((parseDateLocal(endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  if (daysLeft > 365) return 'more than a year to go'
  if (daysLeft > 30) return `${Math.round(daysLeft / 30)} months to go`
  return `${Math.max(daysLeft, 0)} days to go`
}

export const CampaignBannerStats = ({ raised, goal, endDate }: CampaignBannerStatsProps) => {
  const percent = goal > 0 ? Math.min(Math.round((raised / goal) * 100), 100) : 0

  const StatData = [
    {
      id: 'raised',
      stat: formatCurrency(raised),
      desc: 'Amount Raised',
    },
    {
      id: 'goal',
      stat: formatCurrency(goal),
      desc: 'Goal',
    },
    {
      id: 'goalReached',
      stat: `${percent}%`,
      desc: 'of Goal Reached',
    },
    {
      id: 'timeRemaining',
      stat: getTimeRemainingLabel(endDate),
      desc: 'Days Left',
    },
  ]

  return (
    <div className="bg-white px-4 md:px-6 lg:px-0">
      <div className="w-full max-w-5xl mx-auto mt-6 md:mt-10">
        <Column cols="4">
          {StatData.slice(0, 4).map(({ id, stat, desc }) => (
            <Card key={id} leftBorder noHover>
              <Card.Stats stat={stat} desc={desc} />
            </Card>
          ))}
        </Column>
      </div>
    </div>
  )
}

CampaignBannerStats.displayName = 'CampaignBanner.Stats'

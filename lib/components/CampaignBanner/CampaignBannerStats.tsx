import { formatCurrency } from '../../helpers/formatCurrency'
import { Column } from '../../layouts/Column/Column'
import { Card } from '../Card/Card'

export interface CampaignBannerStatsProps {
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
  return `${Math.max(daysLeft, 0)} days left`
}

export const CampaignBannerStats = ({ raised, goal, endDate }: CampaignBannerStatsProps) => {
  const percent = goal > 0 ? Math.min(Math.round((raised / goal) * 100), 100) : 0

  const StatData = [
    {
      id: 'database-regular',
      stat: formatCurrency(raised),
      desc: 'Amount Raised',
    },
    {
      id: 'bullseye-arrow',
      stat: formatCurrency(goal),
      desc: 'Goal',
    },
    {
      id: 'file-chart-pie',
      stat: `${percent}%`,
      desc: 'of Goal Reached',
      reverse: true,
    },
    {
      id: 'calendar-days',
      stat: `${getTimeRemainingLabel(endDate)}`,
      desc: '',
    },
  ]

  return (
    <div className="col-span-full w-full max-w-5xl mx-auto mb-4 lg:mb-8">
      <Column cols="4">
        {StatData.slice(0, 4).map(({ id, stat, desc, reverse }) => (
          <>
            <Card key={id} leftBorder noHover>
              <Card.Stats stat={stat} desc={desc} reverse={reverse} />
            </Card>
          </>
        ))}
      </Column>
    </div>
  )
}

CampaignBannerStats.displayName = 'CampaignBanner.Stats'

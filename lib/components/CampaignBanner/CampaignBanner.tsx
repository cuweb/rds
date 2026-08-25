import { Badge } from '../Badge/Badge'
import { BadgeGroup } from '../BadgeGroup/BadgeGroup'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { PageHeader } from '../PageHeader/PageHeader'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { formatCurrency } from '../../helpers/formatCurrency'

export interface CampaignCategory {
  name: string
  link?: string
}

interface CampaignBannerProps {
  title: string
  raised: number
  goal: number
  endDate: string
  categories?: CampaignCategory[]
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

export const CampaignBanner = ({ title, raised, goal, endDate, categories }: CampaignBannerProps) => {
  const percent = goal > 0 ? Math.min(Math.round((raised / goal) * 100), 100) : 0
  const timeLabel = getTimeRemainingLabel(endDate)
  const isActive = parseDateLocal(endDate).getTime() >= Date.now()
  const statusText = isActive ? 'Active Campaign' : 'Campaign Completed'
  const statusColor = isActive ? 'green' : 'red'

  return (
    <div className="cu-campaign-banner max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 lg:rounded-sm mb-8 lg:mb-12">
      <div className="lg:py-4 lg:w-3/5">
        <BadgeGroup bottom={0} gap="2" left={0} right={0} top={0}>
          <Badge color={statusColor} text={statusText} rounded="base" />
        </BadgeGroup>

        <PageHeader as="h1" header={title} size="lg" noUnderline />

        {categories && categories.length > 0 && (
          <BadgeGroup bottom={0} gap="2" left={0} right={0} top={0}>
            {categories.map((cat) => (
              <Badge key={cat.name} color="grey" text={cat.name} link={cat.link} rounded="base" />
            ))}
          </BadgeGroup>
        )}
      </div>
      <div className="lg:w-2/5 bg-cu-black-50 rounded-lg p-6 lg:px-10 lg:py-10 flex flex-col justify-center">
        <div>
          <div className="mb-2">
            <span className="text-4xl font-bold">{formatCurrency(raised)}</span>
            <span className="text-base text-cu-black-400 ml-2">of {formatCurrency(goal)}</span>
          </div>
          <div className="mb-1.5">
            <ProgressBar value={raised} max={goal} />
          </div>
          <p className="text-sm text-cu-black-600 italic">
            {percent}% funded with {timeLabel}
          </p>
          <ButtonGroup align="start" gap="5">
            <a href="#fund-this-campaign" className="cu-button cu-button--full not-prose cu-button--red">
              Fund this Project
            </a>
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}

CampaignBanner.displayName = 'CampaignBanner'

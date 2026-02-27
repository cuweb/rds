import { Badge } from '../Badge/Badge'
import { BadgeGroup } from '../BadgeGroup/BadgeGroup'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { PageHeader } from '../PageHeader/PageHeader'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { formatCurrency } from '../../helpers/formatCurrency'

interface FundingDetailsProps {
  status: string
  title: string
  raised: number
  goal: number
  imageUrl: string
  imageAlt: string
}

export const FundingDetails = ({ status, title, raised, goal, imageUrl, imageAlt }: FundingDetailsProps) => {
  const percent = goal > 0 ? Math.min(Math.round((raised / goal) * 100), 100) : 0

  return (
    <>
      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 lg:border-b lg:border-cu-black-300/50 lg:rounded-sm lg:pb-8">
        <div className="lg:w-1/2 lg:py-10">
          <BadgeGroup bottom={0} gap="2" left={0} right={0} top={0}>
            <Badge color="green" text={status} />
          </BadgeGroup>

          <PageHeader as="h1" header={title} size="lg" noUnderline />

          <div className="mb-2">
            <span className="text-4xl font-bold">{formatCurrency(raised)}</span>
            <span className="text-base text-cu-black-400 ml-2">of {formatCurrency(goal)}</span>
          </div>

          <div className="mb-1.5">
            <ProgressBar value={raised} max={goal} />
          </div>

          <p className="text-sm text-cu-black-600 mb-8">{percent}% funded</p>

          <ButtonGroup align="start" gap="5">
            <Button onClick={() => {}} title="Fund this Project" />
          </ButtonGroup>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-xl !m-0"
            // style={{ minHeight: '380px' }}
          />
        </div>
      </div>
    </>
  )
}

FundingDetails.displayName = 'FundingDetails'

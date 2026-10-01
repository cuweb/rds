import { Badge } from '../Badge/Badge'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { PageHeader } from '../PageHeader/PageHeader'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { formatCurrency } from '../../helpers/formatCurrency'
import { Button } from '../Button/Button'
import { useLinkContext } from '../LinkProvider/useLinkContext'
import React from 'react'

export interface CampaignCategory {
  name: string
  link: string
  primary?: boolean
}

interface CampaignBannerProps {
  title: string
  content?: React.ReactNode
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

export const CampaignBanner = ({ title, content, raised, goal, endDate, categories }: CampaignBannerProps) => {
  const LinkComponent = useLinkContext()

  const percent = goal > 0 ? Math.min(Math.round((raised / goal) * 100), 100) : 0
  const timeLabel = getTimeRemainingLabel(endDate)

  // Sort categories so that primary ones come first
  if (categories) {
    categories.sort((a, b) => (b.primary ? 1 : 0) - (a.primary ? 1 : 0))
  }

  return (
    <div className="cu-campaign-banner max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 lg:rounded-sm mb-8 lg:mb-12">
      <div className="lg:py-4 lg:w-3/5">
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, index) => (
              <React.Fragment key={cat.name}>
                {cat.primary ? (
                  <>
                    <Badge color="red-solid" text={cat.name} link={cat.link} rounded="base" />
                    {index >= categories.filter((cat) => cat.primary).length - 1 && (
                      <span className="text-cu-black-200">|</span>
                    )}
                  </>
                ) : (
                  <LinkComponent
                    href={cat.link}
                    className="cursor-pointer flex items-center text-cu-black-600 hover:text-cu-red"
                  >
                    <span className="text-xs font-semibold block">{cat.name}</span>
                  </LinkComponent>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <PageHeader as="h1" header={title} size="lg">
          {content}
        </PageHeader>

        <ButtonGroup align="start" gap="5">
          <Button
            color="red"
            type="button"
            title="Fund this Project"
            onClick={() => {
              window.location.hash = 'fund-this-campaign'
            }}
          />
        </ButtonGroup>
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
        </div>
      </div>
    </div>
  )
}

CampaignBanner.displayName = 'CampaignBanner'

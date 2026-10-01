import { Badge } from '../Badge/Badge'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { PageHeader } from '../PageHeader/PageHeader'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { formatCurrency } from '../../helpers/formatCurrency'
import { Button } from '../Button/Button'
import React from 'react'
import { useLinkContext } from '../LinkProvider/useLinkContext'
import { Column } from '../../layouts/Column/Column'
import { Card } from '../Card/Card'

export interface CampaignCategory {
  name: string
  link: string
}

export interface CampaignTag {
  name: string
  link: string
}

interface CampaignBannerProps {
  title: string
  content?: React.ReactNode
  raised: number
  goal: number
  endDate: string
  tags?: CampaignTag[]
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

export const CampaignBanner = ({ title, content, raised, goal, endDate, categories, tags }: CampaignBannerProps) => {
  const LinkComponent = useLinkContext()
  const percent = goal > 0 ? Math.min(Math.round((raised / goal) * 100), 100) : 0
  const timeLabel = getTimeRemainingLabel(endDate)

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

  const tagNames =
    tags && tags.length > 0
      ? tags.map((tag, index) => (
          <>
            <LinkComponent key={tag.name} href={tag.link}>
              {tag.name}
            </LinkComponent>
            {index < tags.length - 1 ? ', ' : null}
          </>
        ))
      : ''

  return (
    <div className="cu-campaign-banner max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 lg:rounded-sm mb-8 lg:mb-12">
        <div className="lg:py-4 lg:w-3/5">
          {/* Page Header */}
          <PageHeader as="h1" header={title} size="lg" preHeader={tagNames}>
            {content}
          </PageHeader>

          {/* Categories */}
          {categories && categories.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <React.Fragment key={cat.name}>
                  <Badge color="grey" text={cat.name} link={cat.link} rounded="base" />
                </React.Fragment>
              ))}
            </div>
          )}

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
      {/* Campaign bottom Section */}
      <Column cols="4">
        {StatData.slice(0, 4).map(({ id, stat, desc }) => (
          <Card key={id} leftBorder noHover>
            <Card.Stats stat={stat} desc={desc} />
          </Card>
        ))}
      </Column>
    </div>
  )
}

CampaignBanner.displayName = 'CampaignBanner'

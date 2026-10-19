import { Badge } from '../Badge/Badge'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { PageHeader } from '../PageHeader/PageHeader'
import { Button } from '../Button/Button'
import React from 'react'
import { useLinkContext } from '../LinkProvider/useLinkContext'

export interface CampaignCategory {
  name: string
  link: string
}

export interface CampaignTag {
  name: string
  link: string
}

export interface CampaignBannerContentProps {
  children?: React.ReactNode
  title: string
  tags?: CampaignTag[]
  categories?: CampaignCategory[]
}

export const CampaignBannerContent = ({ title, tags, categories, children }: CampaignBannerContentProps) => {
  const LinkComponent = useLinkContext()

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
    <div className="lg:max-w-[calc(theme(maxWidth.5xl)/2)] lg:ml-auto lg:-mr-8 my-6 lg:my-14">
      {/* Page Header */}
      <PageHeader as="h1" header={title} size="lg" preHeader={tagNames}>
        {children}
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
  )
}

CampaignBannerContent.displayName = 'CampaignBanner.Content'

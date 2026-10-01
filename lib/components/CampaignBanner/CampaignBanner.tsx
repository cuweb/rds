import { Children, isValidElement } from 'react'
import type { ReactNode } from 'react'
import { CampaignBannerContent } from './CampaignBannerContent'
import { CampaignBannerImage } from './CampaignBannerImage'
import { CampaignBannerStats } from './CampaignBannerStats'

export const CampaignBannerWrapper = ({ children }: { children: ReactNode }) => {
  const bannerChildren = Children.toArray(children)
  const contentAndImage = bannerChildren.filter((child) => !isValidElement(child) || child.type !== CampaignBannerStats)
  const stats = bannerChildren.filter((child) => isValidElement(child) && child.type === CampaignBannerStats)

  return (
    <div className="cu-campaign-banner mx-auto">
      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 lg:rounded-sm mb-8 lg:mb-12">
        {contentAndImage}
      </div>
      {stats}
    </div>
  )
}

export const CampaignBanner = Object.assign(CampaignBannerWrapper, {
  Content: CampaignBannerContent,
  Image: CampaignBannerImage,
  Stats: CampaignBannerStats,
})

CampaignBannerWrapper.displayName = 'CampaignBanner'

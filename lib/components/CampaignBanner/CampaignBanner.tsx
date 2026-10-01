import type { ReactNode } from 'react'
import { CampaignBannerContent } from './CampaignBannerContent'
import { CampaignBannerImage } from './CampaignBannerImage'
import { CampaignBannerStats } from './CampaignBannerStats'

export const CampaignBannerWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="cu-campaign-banner mx-auto">
      <div className="grid grid-cols-1 gap-8 mb-8 lg:grid-cols-2 lg:gap-16 lg:mb-12">{children}</div>
    </section>
  )
}

export const CampaignBanner = Object.assign(CampaignBannerWrapper, {
  Content: CampaignBannerContent,
  Image: CampaignBannerImage,
  Stats: CampaignBannerStats,
})

CampaignBannerWrapper.displayName = 'CampaignBanner'

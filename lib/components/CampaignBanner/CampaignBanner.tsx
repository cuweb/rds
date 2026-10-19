import type { ReactNode } from 'react'
import { CampaignBannerContent } from './CampaignBannerContent'
import { CampaignBannerImage } from './CampaignBannerImage'
import { CampaignBannerStats } from './CampaignBannerStats'

export const CampaignBannerWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="cu-campaign-banner relative w-screen ml-offset-center bg-cu-black-25 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 px-4 md:px-6 lg:px-0">
      {children}
    </section>
  )
}

export const CampaignBanner = Object.assign(CampaignBannerWrapper, {
  Content: CampaignBannerContent,
  Image: CampaignBannerImage,
  Stats: CampaignBannerStats,
})

CampaignBannerWrapper.displayName = 'CampaignBanner'

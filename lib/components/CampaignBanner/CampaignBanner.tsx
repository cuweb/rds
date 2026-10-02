import type { ReactNode } from 'react'
import { CampaignBannerContent } from './CampaignBannerContent'
import { CampaignBannerImage } from './CampaignBannerImage'
import { CampaignBannerStats } from './CampaignBannerStats'
import { CampaignBannerTop } from './CampaignBannerTop'

export const CampaignBannerWrapper = ({ children }: { children: ReactNode }) => {
  return <section className="cu-campaign-banner relative w-screen ml-offset-center">{children}</section>
}

export const CampaignBanner = Object.assign(CampaignBannerWrapper, {
  Top: CampaignBannerTop,
  Content: CampaignBannerContent,
  Image: CampaignBannerImage,
  Stats: CampaignBannerStats,
})

CampaignBannerWrapper.displayName = 'CampaignBanner'

export interface CampaignBannerImageProps {
  children: React.ReactNode
}

export const CampaignBannerImage = ({ children }: CampaignBannerImageProps) => {
  return <div className="cu-campaign-banner__image hidden lg:block">{children}</div>
}

CampaignBannerImage.displayName = 'CampaignBanner.Image'

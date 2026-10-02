export interface CampaignBannerTopProps {
  children: React.ReactNode
}

export const CampaignBannerTop = ({ children }: CampaignBannerTopProps) => {
  return (
    <div className="bg-cu-black-25 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 px-4 md:px-6 lg:px-0">
      {children}
    </div>
  )
}

CampaignBannerTop.displayName = 'CampaignBanner.Top'

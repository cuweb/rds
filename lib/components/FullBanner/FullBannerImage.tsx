export interface FullBannerImageProps {
  children?: React.ReactNode
}

export const FullBannerImage = ({ children }: FullBannerImageProps) => {
  return <div className="relative bg-black">{children}</div>
}

FullBannerImage.displayName = 'FullBanner.Image'

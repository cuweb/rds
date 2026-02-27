export interface FundingDetailsProps {
  image?: string
}

export const FundingDetails = ({ image }: FundingDetailsProps) => {
  console.log('FundingDetails image prop:', image) // Debug log to check the image prop value

  return (
    <div className="bg-cu-black-50">
      <div className="">Left</div>
      <div className="">Right</div>
    </div>
  )
}

FundingDetails.displayName = 'FundingDetails'

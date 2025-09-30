import React from 'react'

export interface TestimonialProps {
  children: React.ReactNode
  imageUrl: string
  imageZoom?: number
  focalPointX?: number
  focalPointY?: number
  reverse?: boolean
}

export const Testimonial = ({
  children,
  imageUrl,
  imageZoom = 0,
  focalPointX = 50,
  focalPointY = 50,
  reverse = false,
}: TestimonialProps) => {
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    transform: `scale(1.${imageZoom})`,
  }

  // Determine flex direction and order based on reverse
  const reverseClasss = reverse ? 'md:pl-12 md:pr-8 md:flex-row-reverse' : 'md:pl-8 md:pr-12 md:flex-row'

  return (
    <div className="cu-testimonial md:py-8">
      <div className="bg-cu-black-50 rounded-xl">
        <div
          className={`mx-auto flex max-w-7xl flex-col-reverse gap-5 md:gap-10 lg:gap-16 items-center ${reverseClasss} md:items-stretch`}
        >
          <div
            className="w-full md:-my-8 hidden md:block md:flex-[0_0_30%] bg-cu-black-25 rounded-lg bg-cover"
            style={inlineImageStyles}
          />
          <div className="w-full md:max-w-none md:flex-auto py-6 px-6 md:px-0 md:py-16 lg:py-20">{children}</div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Quote } from '@carletonuniversity/rds'

export interface TestimonialProps {
  children: React.ReactNode
  name: string
  imageUrl: string
  imageZoom?: number
  focalPointX?: string
  focalPointY?: string
  quoteType?: 'border' | 'quote'
}

export const Testimonial = ({
  children,
  name,
  imageUrl,
  imageZoom = 0,
  focalPointX = '50',
  focalPointY = '50',
  quoteType = 'quote',
}: TestimonialProps) => {
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    transform: `scale(1.${imageZoom})`,
  }

  return (
    <div className="cu-testimonial md:py-8">
      <div className="bg-cu-black-50 rounded-xl">
        <div className="mx-auto flex max-w-7xl flex-col-reverse gap-5 md:gap-10 lg:gap-16 items-center md:pl-8 md:pr-12 md:flex-row md:items-stretch">
          <div
            className="w-full md:-my-8 hidden md:block md:flex-[0_0_30%] bg-cu-red rounded-lg bg-cover"
            style={inlineImageStyles}
          />
          <div className="w-full md:max-w-none md:flex-auto py-6 px-6 md:px-0 md:py-16 lg:py-20">
            <Quote cite={name} graphic={quoteType}>
              {children}
            </Quote>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react' // Required for JSX syntax
import { justifyContentClasses, bgOpacityClasses } from '../../utils/propClasses'
import { PageHeader } from '../PageHeader/PageHeader'

type justifyContentKeys = keyof typeof justifyContentClasses
type bgOpacityKeys = keyof typeof bgOpacityClasses

export interface WideBannerProps {
  children?: React.ReactNode
  title: string
  headerType?: 'h1' | 'h2'
  justify?: justifyContentKeys
  opacity?: bgOpacityKeys
  image?: string
}

export const WideBanner = ({
  children,
  title,
  headerType = 'h1',
  opacity = 70,
  justify = 'start',
  image,
}: WideBannerProps) => {
  return (
    <div
      className={`cu-widebanner relative flex flex-col lg:flex-row items-center justify-center mx-auto overflow-hidden rounded-xl not-prose bg-cu-black-900`}
    >
      <div className="relative">
        <img alt="Top down view of a desk" src={image} />
      </div>

      <div className="cu-prose-light lg:absolute lg:bottom-8 w-full px-6 lg:px-10">
        <div className={`max-w-screen-2xl mx-auto flex ${justifyContentClasses[justify]}`}>
          <div
            className={`lg:max-w-3xl bg-cu-black-900 ${bgOpacityClasses[opacity]} lg:px-8 pt-3 pb-5 lg:pt-6 lg:pb-8 rounded-lg text-white`}
          >
            <PageHeader header={title} as={headerType} size={headerType === 'h1' ? 'md' : 'sm'} noUnderline isWhite>
              {children}
            </PageHeader>
          </div>
        </div>
      </div>
    </div>
  )
}

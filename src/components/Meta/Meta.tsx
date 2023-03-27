import { PropsWithChildren } from 'react'

// Meta Wrapper
export interface MetaProps {
  description?: string
}

const MetaBase = ({ description, children }: PropsWithChildren<MetaProps>) => {
  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="640" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="robots" content="max-snippet:-1,max-image-preview:standard,max-video-preview:-1" />
      {children}
    </>
  )
}

// Meta Icons
export interface IconsProps {
  path?: string
}

const Icons = ({ path = 'https://cdn.carleton.ca/cutheme/favicons' }: IconsProps) => {
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href={path + '/apple-touch-icon.png'} />
      <link rel="icon" type="image/png" sizes="32x32" href={path + '/favicon-32x32.png'} />
      <link rel="icon" type="image/png" sizes="16x16" href={path + '/favicon-16x16.png'} />
    </>
  )
}

// Meta Social
export interface SocialProps {
  social?: string
  card?: string
  title?: string
  image?: string
  type?: string
  locale?: string
  description?: string
}

const Social = ({ type = 'website', locale = 'en_US', card, title, image, description }: SocialProps) => {
  return (
    <>
      <meta property={'og:image'} content={image} key="og-image" />
      <meta property={'og:locale'} content={locale} key="og-locale" />
      <meta property={'og:type'} content={type} key="og-type" />
      <meta property={'og:title'} content={title} key="og-title" />
      <meta property={'og:description'} content={description} key="og-description" />
      <meta name={'twitter:image'} content={image} key="twitter-image" />
      <meta name={'twitter:locale'} content={locale} key="twitter-locale" />
      <meta name={'twitter:type'} content={type} key="twitter-type" />
      <meta name={'twitter:title'} content={title} key="twitter-title" />
      <meta name={'twitter:card'} content={card} key="twitter-card" />
      <meta name={'twitter:description'} content={description} key="twitter-description" />
    </>
  )
}

// Meta Dot Notation
MetaBase.displayName = 'Meta'
Icons.displayName = 'Meta.Icons'
Social.displayName = 'Meta.Social'

export const Meta = Object.assign(MetaBase, { Icons, Social })

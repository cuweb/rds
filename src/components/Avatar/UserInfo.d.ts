import { ReactNode } from 'react'
// import { ImageType } from './Image';

export type ImageType = {
  src: string | undefined
  alt: string | undefined
  width?: string
  height?: string
  className?: string
}

export type UserInfoType = {
  firstName: string
  lastName: string
  image?: ImageType
  info?: ReactNode
}

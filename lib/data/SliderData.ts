import { aspectRatioClasses } from '../utils/propClasses'

type aspectRatioKeys = keyof typeof aspectRatioClasses

type IsliderData = {
  id: number
  image: string
  alt: string
  link?: string
  title?: string
  focalPointX?: number
  focalPointY?: number
  aspectRatio?: aspectRatioKeys
}

export const sliderData: IsliderData[] = [
  {
    id: 1,
    image: 'https://picsum.photos/id/531/600/400',
    link: '#test',
    alt: 'Image requirement',
    title: 'Image Title',
    focalPointX: 0,
    focalPointY: 10,
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/626/600/400',
    link: '#',
    alt: 'Image requirement',
    aspectRatio: 'landscape',
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/381/600/400',
    link: '#',
    alt: 'Image requirement',
  },
  {
    id: 4,
    image: 'https://picsum.photos/id/691/600/400',
    link: '#',
    alt: 'Image requirement',
  },
  {
    id: 5,
    image: 'https://picsum.photos/id/163/600/400',
    link: '#',
    alt: 'Image requirement',
  },
  {
    id: 6,
    image: 'https://picsum.photos/id/482/600/400',
    link: '#',
    alt: 'Image requirement',
  },
]

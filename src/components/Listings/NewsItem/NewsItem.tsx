import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Badge } from '../../Badge/Badge'
import { Link } from '../../Link/Link'

// Set types for as props
type NewsItemTypeProps = 'li' | 'div'

export interface NewsItemProps {
  as?: NewsItemTypeProps
  children?: React.ReactNode
  title: string
  link?: string
  image?: string
  alt?: string
  date?: string | Date
  excerpt?: string
  tags?: Tags
}

interface Tags {
  category: { id: number; name: string; slug: string }[]
}

export const NewsItem = ({ as: Component = 'div', title, link, image, alt, date, excerpt, tags }: NewsItemProps) => {
  const formatedDate = date
    ? new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      })
    : null

  return (
    <Component className="not-prose group relative overflow-hidden @container">
      <Link
        href={link}
        className="group relative flex h-full cursor-pointer flex-col gap-4 bg-white p-6 hover:bg-slate-50 focus:outline-none @lg:md:flex-row @lg:md:gap-8"
      >
        {image && (
          <div className="hidden max-w-[30%] flex-none @lg:md:block">
            <img
              className="w-full rounded-md object-cover"
              src={image ? image : 'https://source.unsplash.com/random/400x266'}
              alt={alt}
            />
          </div>
        )}

        <div className="flex flex-1 flex-col gap-1.5 pr-6 md:gap-2.5 @lg:md:pt-1.5">
          {date && <time className="text-sm italic text-cu-black-600 @2xl:md:text-base">{formatedDate}</time>}
          <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @lg:md:text-xl @2xl:lg:text-2xl">
            {title}
          </h3>
          {excerpt && (
            <p className="text-sm text-cu-black-900 md:text-base @lg:md:text-lg">
              {excerpt.length > 170 ? `${excerpt.substring(0, 170)}...` : excerpt}
              <span className="font-semibold text-cu-red group-hover:text-cyan-700"> Read more</span>
            </p>
          )}
          {tags && (
            <div className="mt-4 @lg:md:mt-auto">
              {tags?.category?.map((tag) => (
                <Badge key={tag.id}>{tag.name}</Badge>
              ))}
            </div>
          )}
        </div>

        <div className="absolute top-1/2 right-4 -mt-3">
          <ChevronRightIcon className="ml-auto h-5 w-5 flex-none text-cu-black-300" aria-hidden="true" />
        </div>
      </Link>
    </Component>
  )
}

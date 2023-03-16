import React from 'react'
import { Badge } from '../../Badge/Badge'
import { Link } from '../../Link/Link'

export interface NewsCardProps {
  children?: React.ReactNode
  title: string
  heading?: 'h2' | 'h3'
  link: string
  date: string
  image?: string
  alt?: string
  excerpt?: string
  tags?: Tags
}

interface Tags {
  category: { id: number; name: string; slug: string }[]
}

export const NewsCard = ({
  title,
  heading: HeadLevel = 'h3',
  link,
  date,
  image,
  alt,
  excerpt,
  tags,
}: NewsCardProps) => {
  const formatedDate = new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
      <Link href={link} className="relative flex h-full cursor-pointer flex-col">
        {image && (
          <img
            className="w-full object-cover"
            src={image ? image : 'https://source.unsplash.com/random/400x266'}
            alt={alt}
          />
        )}

        <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
          {date && <time className="flex items-start text-sm italic text-cu-black-600">{formatedDate}</time>}

          <HeadLevel className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
            {title}
          </HeadLevel>

          {excerpt && (
            <p className="text-base text-cu-black-600">
              {excerpt.length > 170 ? `${excerpt.substring(0, 170)}...` : excerpt}
              <span className="font-semibold text-cu-red group-hover:text-cyan-700"> Read more</span>
            </p>
          )}
        </div>

        <div className="mt-auto px-7 pb-5">
          {tags?.category?.map((tag) => (
            <Badge key={tag.id}>{tag.name}</Badge>
          ))}
        </div>
      </Link>
    </div>
  )
}

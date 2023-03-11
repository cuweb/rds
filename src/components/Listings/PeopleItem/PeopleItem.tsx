import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Badge } from '../../Badge/Badge'
import { Link } from '../../Link/Link'

// Set types for as props
type PeopleItemTypeProps = 'li' | 'div'

export interface PeopleItemProps {
  as?: PeopleItemTypeProps
  children?: React.ReactNode
  firstName: string
  lastName: string
  jobTitle?: string
  email?: string
  phoneNumber?: string
  tags?: Tags
  profileImage?: string
  link?: string
  alt?: string
  noImage?: boolean
}

interface Tags {
  category: { id: number; name: string; slug: string }[]
}

const styles = {
  imageWrapper: ``,
  imageGlobals: `h-20 w-20 apsect-square bg-cu-black-100 overflow-hidden border-4 border-white rounded-lg shadow-md @sm:md:h-28 @sm:md:w-28 @lg:md:h-60 @lg:md:w-60`,
  hasImage: `object-cover w-full h-full`,
  noImage: `w-full h-full flex items-center justify-center @sm:md:text-4xl font-semibold`,
}

export const PeopleItem = ({
  as: Component = 'div',
  firstName,
  lastName,
  email,
  phoneNumber,
  tags,
  jobTitle,
  profileImage,
  alt,
  link = '',
  noImage = false,
}: PeopleItemProps) => {
  const initials = `${firstName.split('')[0]}${lastName.split('')[0]}`

  return (
    <Component className="not-prose group relative overflow-hidden @container">
      <Link
        href={link}
        className="group relative flex cursor-pointer flex-col gap-5 bg-white p-6 hover:bg-slate-50 focus:outline-none sm:grid-cols-1 @sm:md:gap-8 @lg:md:flex-row"
      >
        {!noImage && (
          <>
            {profileImage && (
              <div className={`${styles.imageGlobals}`}>
                <img className={`${styles.hasImage}`} src={profileImage} alt={alt} />
              </div>
            )}
            {!profileImage && (
              <div className={`${styles.imageGlobals}`}>
                <div className={`${styles.noImage}`}>{initials}</div>
              </div>
            )}
          </>
        )}

        <div className="flex flex-1 flex-col gap-1.5 pr-6 pt-1 md:gap-px @sm:md:pt-0 @lg:md:pt-2">
          <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red md:text-xl @lg:md:text-2xl">
            {firstName + ' ' + lastName}
          </h3>
          {jobTitle && <p className="text-sm italic text-cu-black-600 @md:md:text-base @2xl:md:text-lg">{jobTitle}</p>}

          <ul className="space-y-1.5 pt-4">
            {email && <li className="text-text-cyan-700 text-sm font-semibold @2xl:lg:text-base">{email}</li>}

            {phoneNumber && (
              <li className="text-sm text-cu-black-700 hover:text-cu-red @2xl:lg:text-base">{phoneNumber}</li>
            )}
          </ul>

          <div className="mt-4 @lg:md:mt-auto">
            {tags?.category?.map((tag) => (
              <Badge key={tag.id}>{tag.name}</Badge>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 right-4 -mt-3">
          <ChevronRightIcon className="ml-auto h-5 w-5 flex-none text-cu-black-300" aria-hidden="true" />
        </div>
      </Link>
    </Component>
  )
}

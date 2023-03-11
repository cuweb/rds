import { Badge } from '../../Badge/Badge'
import { Link } from '../../Link/Link'

export interface PeopleCardProps {
  firstName: string
  lastName: string
  jobTitle?: string
  email: string
  phoneNumber?: string
  tags?: Tags
  profileImage?: any
  link?: string
  alt?: string
  noImage?: boolean
}

interface Tags {
  category: { id: number; name: string; slug: string }[]
}

const styles = {
  profile:
    'mx-auto h-48 w-48 rounded-full border-4 border-white object-cover group-hover:shadow-md group-hover:duration-300 group-hover:ease-in @sm:md:h-60 @sm:md:w-60',
}

export const PeopleCard = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  tags,
  jobTitle,
  profileImage,
  link = '',
  alt,
  noImage = false,
}: PeopleCardProps) => {
  const initials = `${firstName.split('')[0]}${lastName.split('')[0]}`

  return (
    <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white py-8 px-7 shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
      <Link href={link} className="relative flex h-full cursor-pointer flex-col">
        {!noImage && (
          <>
            {profileImage && (
              <img
                className={`${styles.profile}`}
                src={profileImage ? profileImage : 'https://source.unsplash.com/random/400x266'}
                alt={alt}
              />
            )}

            {!profileImage && (
              <div
                className={` ${styles.profile} flex items-center justify-center bg-cu-black-100 text-4xl font-semibold`}
              >
                {initials}
              </div>
            )}
          </>
        )}

        <div className="flex flex-col space-y-0.5 py-6 px-7 text-center">
          <h3 className="text-lg font-semibold text-cu-black  group-hover:text-cu-red @xs:md:text-2xl">
            {firstName + ' ' + lastName}
          </h3>
          {jobTitle && <p className="text-sm italic text-cu-black-600 @sm:md:text-lg">{jobTitle}</p>}
          <ul className="space-y-1 pt-3">
            <li className="text-sm font-semibold text-cyan-700 hover:text-cu-red @lg:md:text-base">
              {/* <a href={`mailto:${email}`} className="font-semibold text-cyan-700 hover:text-cu-red"> */}
              {email}
              {/* </a> */}
            </li>
            {phoneNumber && (
              <li className="text-sm text-cu-black-600 hover:text-cu-red @lg:md:text-base">{phoneNumber}</li>
            )}
          </ul>
        </div>

        <div className="mx-auto mt-auto">
          {tags?.category?.map((tag) => (
            <Badge key={tag.id}>{tag.name}</Badge>
          ))}
        </div>
      </Link>
    </div>
  )
}

import { listStyles, socialStyles } from './PageHeaders.Styles'
import { proseStyles, proseGroups } from '../../utils/globalClasses'
import { Button } from '../Button/Button'

export interface PageHeadersPeopleProps {
  jobTitle?: string
  degrees?: string
  building?: string
  room?: string
  email?: string
  phone?: string
  phoneExt?: string
}

export interface PageHeadersSocialProps {
  resume?: string
  website?: string
  linkedin?: string
  twitter?: string
  facebook?: string
}

export const PageHeadersPeople = ({ jobTitle, ...restProps }: PageHeadersPeopleProps & PageHeadersSocialProps) => {
  const { degrees, building, room, email, phone, phoneExt, resume, website, linkedin, twitter, facebook } = restProps
  const profileDetails = ['degrees', 'building', 'room', 'email', 'phone', 'phoneExt']
  const socialDetails = ['resume', 'linkedin', 'twitter', 'facebook']

  return (
    <>
      {jobTitle && <p className={proseGroups.largeLight}>{jobTitle}</p>}

      {/* Check if details are set and output as ul */}
      {Object.values(profileDetails).some((info) => info) && (
        <div className={`${listStyles.listWrapper} ${proseStyles.base}`}>
          <ul className={listStyles.listVertical}>
            {degrees && <li>{degrees}</li>}
            {building && (
              <li>
                {room && `${room} `}
                {building}
              </li>
            )}
            {email && (
              <li>
                <a className={listStyles.listLink} href={`mailto:${email}`}>
                  {email}
                </a>
              </li>
            )}
            {phone && (
              <li>
                {phone}
                {phoneExt && ` x${phoneExt}`}
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Check is socials are set and render div */}
      {Object.values(socialDetails).some((info) => info) && (
        <div className={`${listStyles.listWrapper} ${proseStyles.base}`}>
          <ul className={listStyles.listHorizontal}>
            {resume && (
              <li>
                <Button
                  isSmall
                  color="grey"
                  onClick={() => {
                    window.location.href = resume
                  }}
                  title="Resume"
                />
              </li>
            )}

            {linkedin && (
              <li>
                <a className={`${socialStyles.link} hover:text-[#0072b1]`} href={linkedin}>
                  <span className="sr-only">View on LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className={socialStyles.icon}
                    aria-hidden="true"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </li>
            )}

            {twitter && (
              <li>
                <a className={`${socialStyles.link} hover:text-[#00acee]`} href={linkedin}>
                  <span className="sr-only">View on Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className={socialStyles.icon}
                    aria-hidden="true"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a>
              </li>
            )}

            {facebook && (
              <li>
                <a className={`${socialStyles.link} hover:text-[#3b5998]`} href={linkedin}>
                  <span className="sr-only">View on Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className={socialStyles.icon}
                    aria-hidden="true"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a>
              </li>
            )}

            {website && (
              <li>
                <a className={`${socialStyles.link} hover:text-[#3e8060]`} href={website}>
                  <span className="sr-only">View Website</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    fill="currentColor"
                    className={socialStyles.icon}
                    aria-hidden="true"
                  >
                    <path d="M580.3 267.2c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6L433.1 346.6c-37.4 37.4-98.2 37.4-135.6 0c-35.7-35.7-37.6-92.9-4.4-130.9l4.7-5.4c8.7-10 7.7-25.1-2.3-33.9s-25.1-7.7-33.9 2.3l-4.7 5.4c-49.8 57-46.9 142.9 6.6 196.4c56.2 56.2 147.3 56.2 203.5 0L580.3 267.2zM59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6L207 165.4c37.4-37.4 98.1-37.4 135.6 0c35.7 35.7 37.6 92.9 4.4 130.9l-5.4 6.1c-8.7 10-7.7 25.1 2.3 33.9s25.1 7.7 33.9-2.3l5.4-6.1c49.9-57 47-142.9-6.5-196.5c-56.2-56.2-147.3-56.2-203.5 0L59.7 244.8z" />
                  </svg>
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  )
}

PageHeadersPeople.displayName = 'PageHeaders.People'

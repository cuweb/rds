import { socialStyles } from './HeroTextImage.Styles'
import { Button } from '../../components/Button/Button'

export interface HeroTextImageSocialProps {
  resume?: string
  linkedin?: string
  twitter?: string
  facebook?: string
}

export const HeroTextImageSocial = ({ resume, linkedin, twitter, facebook }: HeroTextImageSocialProps) => {
  return (
    <div className={socialStyles.flex}>
      {resume && (
        <Button
          isSmall
          color="grey"
          onClick={() => {
            window.location.href = resume
          }}
          title="Resume"
        />
      )}
      <ul className={socialStyles.flex}>
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
      </ul>
    </div>
  )
}

HeroTextImageSocial.displayName = 'HeroTextImage.Social'

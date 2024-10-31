import { useLinkContext } from '../LinkProvider/useLinkContext'
import { listStyles, socialStyles } from './PageHeader.Styles'

export interface PageHeaderPeopleProps {
  jobTitle?: string
  degrees?: string
  building?: string
  room?: string
  email?: string
  phone?: string
  phoneExt?: string
  orcidID?: string
}

export interface PageHeaderSocialProps {
  resume?: string
  website?: string
  linkedin?: string
  twitter?: string
  facebook?: string
  instagram?: string
}

export const PageHeaderPeople = ({ jobTitle, ...restProps }: PageHeaderPeopleProps & PageHeaderSocialProps) => {
  const { degrees, building, room, email, phone, phoneExt, orcidID, website, linkedin, twitter, facebook, instagram } =
    restProps
  const profileDetails = ['degrees', 'building', 'room', 'email', 'phone', 'phoneExt']
  const socialDetails = ['resume', 'linkedin', 'twitter', 'facebook', 'instagram', 'orcidID']
  const LinkComponent = useLinkContext()

  return (
    <>
      {jobTitle && <p className="cu-prose-font-light">{jobTitle}</p>}

      {/* Check if details are set and output as ul */}
      {Object.values(profileDetails).some((info) => info) && (
        <div className={`${listStyles.listWrapper}`}>
          <ul>
            {degrees && <li>{degrees}</li>}
            {building && (
              <li>
                {room && `${room} `}
                {building}
              </li>
            )}
            {email && (
              <li>
                <LinkComponent className={listStyles.listLink} href={`mailto:${email}`}>
                  {email}
                </LinkComponent>
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
        <div className={`${listStyles.listWrapper}`}>
          <ul className={listStyles.listHorizontal}>
            {linkedin && (
              <li>
                <LinkComponent className={socialStyles.link} href={linkedin}>
                  <span className="sr-only">View on LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#0072b1"
                    className={socialStyles.icon}
                    aria-hidden="true"
                  >
                    <title>View on LinkedIn</title>
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </LinkComponent>
              </li>
            )}
            {twitter && (
              <li>
                <LinkComponent className={socialStyles.link} href={twitter}>
                  <span className="sr-only">View on Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={socialStyles.icon}
                    aria-hidden="true"
                  >
                    <title>View on X</title>
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </LinkComponent>
              </li>
            )}
            {facebook && (
              <li>
                <LinkComponent className={socialStyles.link} href={facebook}>
                  <span className="sr-only">View on Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#3b5998"
                    className={socialStyles.icon}
                    aria-hidden="true"
                  >
                    <title>View on Facebook</title>
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </LinkComponent>
              </li>
            )}
            {instagram && (
              <li>
                <LinkComponent className={socialStyles.link} href={instagram}>
                  <span className="sr-only">View on Instagram</span>
                  <svg
                    className={socialStyles.icon}
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <title>View on Instagram</title>
                    <defs>
                      <radialGradient id="instagram" r="150%" cx="30%" cy="107%">
                        <stop stopColor="#fdf497" offset="0"></stop>
                        <stop stopColor="#fdf497" offset="0.05"></stop>
                        <stop stopColor="#fd5949" offset="0.45"></stop>
                        <stop stopColor="#d6249f" offset="0.6"></stop>
                        <stop stopColor="#285AEB" offset="0.9"></stop>
                      </radialGradient>
                    </defs>
                    <path
                      style={{ fill: 'url(#instagram)' }}
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </LinkComponent>
              </li>
            )}
            {website && (
              <li>
                <LinkComponent className={socialStyles.link} href={website}>
                  <span className="sr-only">View Website</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    fill="#3e8060"
                    className={socialStyles.icon}
                    aria-hidden="true"
                  >
                    <title>Go to Website</title>
                    <path d="M580.3 267.2c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6L433.1 346.6c-37.4 37.4-98.2 37.4-135.6 0c-35.7-35.7-37.6-92.9-4.4-130.9l4.7-5.4c8.7-10 7.7-25.1-2.3-33.9s-25.1-7.7-33.9 2.3l-4.7 5.4c-49.8 57-46.9 142.9 6.6 196.4c56.2 56.2 147.3 56.2 203.5 0L580.3 267.2zM59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6L207 165.4c37.4-37.4 98.1-37.4 135.6 0c35.7 35.7 37.6 92.9 4.4 130.9l-5.4 6.1c-8.7 10-7.7 25.1 2.3 33.9s25.1 7.7 33.9-2.3l5.4-6.1c49.9-57 47-142.9-6.5-196.5c-56.2-56.2-147.3-56.2-203.5 0L59.7 244.8z" />
                  </svg>
                </LinkComponent>
              </li>
            )}
            {orcidID && (
              <li>
                <LinkComponent className={socialStyles.link} href={`https://orcid.org/${orcidID}`}>
                  <span className="sr-only">Go to ORCID Website</span>
                  <svg
                    width="72px"
                    height="72px"
                    viewBox="0 0 72 72"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className={socialStyles.icon}
                    aria-hidden="true"
                  >
                    <title>Go to ORCID Website</title>
                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="hero" transform="translate(-924.000000, -72.000000)" fill-rule="nonzero">
                        <g id="Group-4">
                          <g id="vector_iD_icon" transform="translate(924.000000, 72.000000)">
                            <path
                              d="M72,36 C72,55.884375 55.884375,72 36,72 C16.115625,72 0,55.884375 0,36 C0,16.115625 16.115625,0 36,0 C55.884375,0 72,16.115625 72,36 Z"
                              id="Path"
                              fill="#A6CE39"
                            />
                            <g id="Group" transform="translate(18.868966, 12.910345)" fill="#FFFFFF">
                              <polygon
                                id="Path"
                                points="5.03734929 39.1250878 0.695429861 39.1250878 0.695429861 9.14431787 5.03734929 9.14431787 5.03734929 22.6930505 5.03734929 39.1250878"
                              />
                              <path
                                d="M11.409257,9.14431787 L23.1380784,9.14431787 C34.303014,9.14431787 39.2088191,17.0664074 39.2088191,24.1486995 C39.2088191,31.846843 33.1470485,39.1530811 23.1944669,39.1530811 L11.409257,39.1530811 L11.409257,9.14431787 Z M15.7511765,35.2620194 L22.6587756,35.2620194 C32.49858,35.2620194 34.7541226,27.8438084 34.7541226,24.1486995 C34.7541226,18.1301509 30.8915059,13.0353795 22.4332213,13.0353795 L15.7511765,13.0353795 L15.7511765,35.2620194 Z"
                                id="Shape"
                              />
                              <path
                                d="M5.71401206,2.90182329 C5.71401206,4.441452 4.44526937,5.72914146 2.86638958,5.72914146 C1.28750978,5.72914146 0.0187670918,4.441452 0.0187670918,2.90182329 C0.0187670918,1.33420133 1.28750978,0.0745051096 2.86638958,0.0745051096 C4.44526937,0.0745051096 5.71401206,1.36219458 5.71401206,2.90182329 Z"
                                id="Path"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </LinkComponent>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  )
}

PageHeaderPeople.displayName = 'PageHeader.People'

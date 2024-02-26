import { FooterLogoLinks } from '../FooterLogoLinks/FooterLogoLinks'
import { footerStyles } from '../../../utils/globalClasses'
import { FooterStandardLinks as linkData } from '../../../data/FooterStandardData'
import { useLinkContext } from '../../LinkProvider/useLinkContext'

const Social = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/carletonuniversity',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="w-8 h-8 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/carleton_u',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="w-8 h-8 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/@Carleton_U',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="w-8 h-8 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/user/carletonuvideos',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        fill="currentColor"
        className="w-8 h-8 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/school/carleton-university',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="w-8 h-8 sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
  },
]

const styles = {
  linkHeaders: `text-base font-bold text-white`,
}

export const FooterStandard = () => {
  const LinkComponent = useLinkContext()

  return (
    <footer
      className={`cu-footerstandard not-prose px-8 py-8 bg-cu-black-900 md:px-10 md:py-12 ${footerStyles.wave}`}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="bg-white sr-only text-cu-black-900">
        Footer
      </h2>

      <div className="flex-col hidden lg:pb-8 lg:mx-auto lg:mb-8 lg:border-b lg:flex lg:max-w-7xl lg:border-cu-black-700">
        <div id="footer-links" className="flex justify-between w-full">
          <div>
            <h3 className={styles.linkHeaders}>Admissions</h3>
            <ul>
              {linkData.Admissions.map((item, index) => (
                <li key={index} className="mt-2.5 text-sm">
                  <LinkComponent href={item.href} className="text-cu-black-300 hover:text-white">
                    {item.name}
                  </LinkComponent>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.linkHeaders}>Academics</h3>
            <ul>
              {linkData.Academics.map((item, index) => (
                <li key={index} className="mt-2.5 text-sm">
                  <LinkComponent href={item.href} className="text-cu-black-300 hover:text-white">
                    {item.name}
                  </LinkComponent>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.linkHeaders}>Students</h3>
            <ul>
              {linkData.Students.map((item, index) => (
                <li key={index} className="mt-2.5 text-sm">
                  <LinkComponent href={item.href} className="text-cu-black-300 hover:text-white">
                    {item.name}
                  </LinkComponent>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.linkHeaders}>Campus</h3>
            <ul>
              {linkData.Campus.map((item, index) => (
                <li key={index} className="mt-2.5 text-sm">
                  <LinkComponent href={item.href} className="text-cu-black-300 hover:text-white">
                    {item.name}
                  </LinkComponent>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.linkHeaders}>Ravens</h3>
            <ul>
              {linkData.Ravens.map((item, index) => (
                <li key={index} className="mt-2.5 text-sm">
                  <LinkComponent href={item.href} className="text-cu-black-300 hover:text-white">
                    {item.name}
                  </LinkComponent>
                </li>
              ))}
            </ul>
            <LinkComponent href="https://goravens.carleton.ca" className="w-12 h-auto">
              <img
                className="w-12 h-auto mt-8"
                src="https://cu-production.s3.amazonaws.com/rds/assets/ravens-logos/ravens-logo.svg"
                alt="Carleton"
              />
            </LinkComponent>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto max-w-7xl">
        <div className="flex flex-col-reverse items-center justify-between gap-2 mb-12 text-base lg:gap-4 lg:text-sm lg:items-start lg:flex-row text-cu-black-300">
          <p>
            Contact us by{' '}
            <LinkComponent
              href="tel:+1-613-520-2600"
              className="font-semibold text-white underline underline-offset-auto hover:text-cu-red"
            >
              phone
            </LinkComponent>{' '}
            or{' '}
            <LinkComponent
              href="https://carleton.ca/about/contact/"
              className="font-semibold text-white underline underline-offset-auto hover:text-cu-red"
            >
              email
            </LinkComponent>
          </p>
          <p>1125 Colonel By Drive, Ottawa, ON, K1S 5B6, Canada</p>
          <ul className="flex justify-center gap-5 mb-4 lg:mb-0 lg:justify-end">
            {Social.map((item, index) => (
              <li key={index}>
                <LinkComponent href={item.href} className="text-gray-200 hover:text-cu-red">
                  <span className="sr-only">{item.name}</span>
                  <item.icon />
                </LinkComponent>
              </li>
            ))}
          </ul>
        </div>
        <FooterLogoLinks />
      </div>
    </footer>
  )
}

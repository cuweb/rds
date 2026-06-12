import { FooterLogoLinks } from '../FooterLogoLinks/FooterLogoLinks'
import { FooterFutureFunderLinks as futureFunderData } from '../../../data/FooterStandardData'
import { useLinkContext } from '../../LinkProvider/useLinkContext'
import { FooterSocialIcons } from '../FooterSocialIcons'
import { footerStyles as styles } from '../footerStyles'

export const FooterFutureFunder = () => {
  const LinkComponent = useLinkContext()

  return (
    <footer
      className="cu-footerstandard mt-auto mb-0 not-prose px-8 py-8 bg-cu-black-900 md:px-10 md:py-12 bg-cu-waves-footer-red bg-[length:100.5%] bg-bottom bg-no-repeat"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="flex-col pb-8 md:mx-auto md:mb-8 md:border-b md:block md:max-w-7xl md:border-cu-black-700">
        <p className="text-sm md:text-base text-center font-medium text-white">
          Carleton University acknowledges the location of its campus on the traditional, unceded territories of the
          Algonquin Anishinàbeg nation
        </p>
      </div>

      <div className="flex-col hidden md:pb-8 md:mx-auto md:mb-8 md:border-b md:block md:max-w-7xl md:border-cu-black-700">
        <div id="footer-links" className="flex justify-between w-full gap-8">
          {/* EXPLORE */}
          <div className="min-w-[140px]">
            <h3 className={styles.linkHeaders}>Explore</h3>
            <ul>
              {futureFunderData.Explore.map((item, index) => (
                <li key={index} className="mt-2.5 text-sm">
                  <LinkComponent href={item.href} className="text-cu-black-300 hover:text-white">
                    {item.name}
                  </LinkComponent>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORIES / DEPARTMENTS */}
          <div className="min-w-[280px]">
            <h3 className={styles.linkHeaders}>Categories / Departments</h3>
            <div className="grid grid-cols-2 gap-x-8 mt-2.5">
              {futureFunderData.Categories.map((item, index) => (
                <div key={index} className="mt-2.5 text-sm">
                  <LinkComponent href={item.href} className="text-cu-black-300 hover:text-white">
                    {item.name}
                  </LinkComponent>
                </div>
              ))}
            </div>
          </div>

          {/* REGISTER / LOGIN */}
          <div className="min-w-[140px]">
            <h3 className={styles.linkHeaders}>Register/Login</h3>
            <ul>
              {futureFunderData.RegisterLogin.map((item, index) => (
                <li key={index} className="mt-2.5 text-sm">
                  <LinkComponent href={item.href} className="text-cu-black-300 hover:text-white">
                    {item.name}
                  </LinkComponent>
                </li>
              ))}
            </ul>
          </div>

          {/* HERE FOR GOOD */}
          <div className="min-w-[160px]">
            <h3 className={styles.linkHeaders}>Here For Good</h3>
            <ul>
              {futureFunderData.HereForGood.map((item, index) => (
                <li key={index} className="mt-2.5 text-sm">
                  <LinkComponent href={item.href} className="text-cu-black-300 hover:text-white">
                    {item.name}
                  </LinkComponent>
                </li>
              ))}
            </ul>
            <div className="mt-6 leading-none" aria-hidden="true">
              <p className="text-4xl font-black text-white uppercase tracking-tight">
                HERE <span className="italic font-normal">for</span>
              </p>
              <p className="text-4xl font-black text-white uppercase tracking-tight">GOOD</p>
            </div>
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
          <p className="text-center">1125 Colonel By Drive, Ottawa, ON, K1S 5B6, Canada</p>
          <FooterSocialIcons hoverColor="hover:text-white" />
        </div>
        <FooterLogoLinks />
      </div>
    </footer>
  )
}

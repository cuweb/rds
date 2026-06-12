import { FooterLogoLinks } from '../FooterLogoLinks/FooterLogoLinks'
import { FooterFutureFunderLinks as futureFunderData } from '../../../data/FooterStandardData'
import { useLinkContext } from '../../LinkProvider/useLinkContext'

const styles = {
  linkHeaders: `text-base font-bold text-white mt-8`,
}

export const FooterFutureFunder = () => {
  const LinkComponent = useLinkContext()

  return (
    <footer
      className="cu-footerfuturefunder mt-auto mb-0 not-prose px-8 py-8 bg-cu-black-900 md:px-10 md:py-12"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

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
          <div>
            <h3 className={styles.linkHeaders}>Categories / Departments</h3>
            <div className="flex gap-6 mt-2.5">
              {[0, 6, 11].map((start, colIndex) => (
                <ul key={colIndex}>
                  {futureFunderData.Categories.slice(start, [6, 11, 16][colIndex]).map((item, index) => (
                    <li key={index} className="mt-1.5 text-sm">
                      <LinkComponent href={item.href} className="text-cu-black-300 hover:text-white">
                        {item.name}
                      </LinkComponent>
                    </li>
                  ))}
                </ul>
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
        <FooterLogoLinks />
      </div>
    </footer>
  )
}

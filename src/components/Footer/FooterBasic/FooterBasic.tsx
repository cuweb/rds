import { FooterLogoLinks } from '../FooterLogoLinks/FooterLogoLinks'

export const FooterBasic = () => {
  return (
    <footer
      className="cu-footerbasic not-prose bg-cu-black-900 bg-cu-waves-red bg-cover bg-bottom pt-8 sm:pt-12"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <FooterLogoLinks />
    </footer>
  )
}

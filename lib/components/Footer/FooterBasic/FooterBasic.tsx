import { FooterLogoLinks } from '../FooterLogoLinks/FooterLogoLinks'

export const FooterBasic = () => {
  return (
    <footer
      className="mt-auto mb-0 pt-8 bg-bottom bg-cover cu-footerbasic not-prose bg-cu-black-900 bg-cu-waves-footer-red sm:pt-12"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="bg-white sr-only text-cu-black-900">
        Footer
      </h2>
      <FooterLogoLinks />
    </footer>
  )
}

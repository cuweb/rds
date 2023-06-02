import { FooterWave } from '../FooterWave/FooterWave'

export const FooterBasic = () => {
  return (
    <footer className="cu-footerbasic not-prose bg-cu-black-900 pt-8 sm:pt-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <FooterWave />
    </footer>
  )
}

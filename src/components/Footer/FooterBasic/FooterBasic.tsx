import { FooterWave } from '../FooterWave'

export const FooterBasic = () => {
  return (
    <footer className="pt-8 not-prose bg-cu-black-900 sm:pt-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <FooterWave />
    </footer>
  )
}

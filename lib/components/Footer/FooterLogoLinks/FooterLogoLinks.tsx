import { useLinkContext } from '../../LinkProvider/useLinkContext'

export const FooterLogoLinks = () => {
  const LinkComponent = useLinkContext()

  return (
    <div className="grid justify-center pb-24 not-prose sm:pb-36 lg:pb-44">
      <img
        className="w-auto h-32 mx-auto mb-6 sm:h-44"
        src="https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-vertical-outlined.svg"
        alt="Logo of Carleton University"
      />
      <ul className="flex flex-wrap justify-center space-x-4 gap-y-4 text-xs bg-cu-black-900 text-cu-black-300 sm:space-x-6 sm:text-sm">
        <li key="privacy">
          <LinkComponent
            href="https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/"
            className="hover:text-white"
          >
            Privacy Policy
          </LinkComponent>
        </li>
        <li key="accessibility">
          <LinkComponent href="https://carleton.ca/accessibility/" className="hover:text-white">
            Accessibility
          </LinkComponent>
        </li>
        <li key="copyright">
          <LinkComponent href="https://library.carleton.ca/copyright-carleton" className="hover:text-white">
            &copy; Copyright {new Date().getFullYear()}
          </LinkComponent>
        </li>
      </ul>
    </div>
  )
}

import { useLinkContext } from '../../LinkProvider/useLinkContext'

export const FooterLogoLinks = () => {
  const LinkComponent = useLinkContext()

  return (
    <div className="not-prose grid justify-center pb-24 sm:pb-36 lg:pb-44">
      <img
        className="mx-auto mb-6 h-32 w-auto sm:h-44"
        src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-vertical-outlined.svg"
        alt="Carleton University logo"
      />
      <ul className="flex justify-center space-x-4 bg-cu-black-900 text-xs text-gray-400 sm:space-x-6 sm:text-sm">
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

import { useState } from 'react'
import { Button } from '../../Button/Button'

export const FooterCookie = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleButtonClick = () => {
    setIsVisible(false)
  }

  return (
    <div
      className={`${
        isVisible ? '' : 'hidden'
      } fixed mx-auto max-w-7xl p-6 border-4 rounded-md shadow-lg bg-cu-black-25 bottom-6 right-6 left-6 border-white cu-cookie-notice`}
    >
      <div className="gap-5 text-center md:item-center md:text-left md:flex">
        <p className="max-w-3xl text-sm text-cu-black-600 md:text-base">
          This site uses cookies to offer you a better browsing experience. Find out more on{' '}
          <a
            href="https://carleton.ca/privacy/privacy-notices/website-privacy-notice/"
            className="font-semibold text-cu-red-700 hover:underline"
          >
            how we use cookies and how you can change your settings.
          </a>
        </p>
        <div className="mt-5 ml-auto md:mt-0 cu-cookie-button">
          <Button onClick={handleButtonClick} title="Ok, got it!" noBreak />
        </div>
      </div>
    </div>
  )
}

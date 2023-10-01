/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Button } from '../../Button/Button'

export const FooterCookie = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleButtonClick = () => {
    setIsVisible(false)
  }

  return (
    <div className={`fixed px-8 py-5 bg-white bg-opacity-95 bottom-0 w-full md:px-10 ${isVisible ? '' : 'hidden'}`}>
      <div className="gap-5 mx-auto text-center max-w-7xl md:text-left md:flex">
        <p className="max-w-3xl text-sm text-cu-black-600 md:text-base">
          This site uses cookies to offer you a better browsing experience. Find out more on{' '}
          <a
            href="https://carleton.ca/privacy/privacy-notices/website-privacy-notice/"
            className="font-semibold text-cu-red"
          >
            how we use cookies and how you can change your settings.
          </a>
        </p>
        <div className="mt-5 ml-auto md:mt-0">
          <Button onClick={handleButtonClick} title="Ok, got it!" noBreak />
        </div>
      </div>
    </div>
  )
}

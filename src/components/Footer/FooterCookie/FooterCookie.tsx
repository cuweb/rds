/* eslint-disable jsx-a11y/anchor-is-valid */
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
      } fixed inset-x-0 px-6 py-5 border rounded-md shadow-lg bg-cu-black-50 bottom-6 right-7 left-7 border-cu-black-100`}
    >
      <div className="gap-5 text-center md:text-left md:flex">
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

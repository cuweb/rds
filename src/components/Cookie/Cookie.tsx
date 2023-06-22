/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Button } from '../Button/Button'

export const Cookie = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleButtonClick = () => {
    setIsVisible(false)
  }

  return (
    <div
      className={`fixed bottom-0 left-0 w-full border-t border-cu-black-100 text-center ${isVisible ? '' : 'hidden'}`}
    >
      <div className="mx-auto p-5 text-center">
        <p className="mb-4 text-base leading-6 text-gray-900">
          This site uses cookies to offer you a better browsing experience. Find out more on{' '}
          <a href="#" className="font-semibold text-cu-red">
            how we use cookies and how you can change your settings.
          </a>
        </p>
        <Button isSmall onClick={handleButtonClick} title="Ok, got it!" />
      </div>
    </div>
  )
}

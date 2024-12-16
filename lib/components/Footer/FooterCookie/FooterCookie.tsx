import { useState, useEffect } from 'react'
import { Button } from '../../Button/Button'

export const IsCookieExpired = (cookieName: string) => {
  if (typeof document !== 'undefined') {
    const cookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith(cookieName + '='))

    if (!cookie) {
      return true
    }

    const cookieValue = cookie.split('=')[1]
    const expirationDate = new Date(cookieValue)
    return expirationDate.getTime() <= Date.now()
  }
  return false
}

export const SetCookie = (cookieName: string) => {
  if (typeof document !== 'undefined') {
    const date = new Date()

    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000)

    const expires = '; expires=' + date.toUTCString()

    document.cookie = cookieName + '=true;expires=' + expires + ';path=/'
  }
}

export const FooterCookie = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkCookieExpired = IsCookieExpired('cookieConsent')
    setIsVisible(checkCookieExpired ? true : false)
  }, [])

  const handleButtonClick = () => {
    SetCookie('cookieConsent')
    setIsVisible(false)
  }

  return (
    <div
      className={`hidden fixed z-50 mx-auto max-w-7xl p-6 border-4 rounded-md shadow-lg bg-cu-black-25 bottom-6 right-6 left-6 border-white cu-cookie-notice ${
        isVisible ? '!block' : ''
      }`}
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
          <Button onClick={handleButtonClick} title="Ok, got it!" />
        </div>
      </div>
    </div>
  )
}

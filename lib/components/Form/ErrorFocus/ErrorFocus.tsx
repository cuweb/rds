import { useEffect } from 'react'
import { useFormikContext } from 'formik'

export const scrollToErrors = () => {
  const errorElement = document.querySelector('.error')

  if (errorElement) {
    const headerOffset = 150

    const elementPosition = errorElement ? errorElement.getBoundingClientRect().top : 0
    const offsetPosition = elementPosition + window.scrollY - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

const ErrorFocus = () => {
  const { isSubmitting, isValidating, errors } = useFormikContext()

  useEffect(() => {
    const keys = Object.keys(errors)

    if (keys.length > 0 && isSubmitting && !isValidating) {
      scrollToErrors()
    }
  }, [isSubmitting, isValidating, errors])

  return null
}

export default ErrorFocus

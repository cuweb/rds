import React from 'react'
import { Button } from '../Button/Button'

export interface WideImageSignupProps {
  children?: React.ReactNode
  buttonText?: string
}

export const WideImageSignup = ({ buttonText = 'Submit Email' }: WideImageSignupProps) => {
  return (
    <div className="w-full max-w-xl space-y-5 cu-wideimage-signup">
      <div className="flex gap-2.5">
        <label htmlFor="email" className="sr-only">
          Enter you email address
        </label>
        <input
          type="text"
          id="email"
          name="email"
          required
          placeholder="Enter you email address"
          className="flex-1 rounded px-3.5 py-2 focus:ring-1 focus:ring-inset"
        />
        <Button title={buttonText || 'Subscribe'} />
      </div>

      <div className="flex items-start flex-none gap-2 ml-1 text-left">
        <input name="favcharacters" id="optin" type="checkbox" className="mt-0.5 border rounded-sm" value="name" />
        <label htmlFor="optin" className="text-sm font-light">
          I agree to receive email from Carleton University. Read our{' '}
          <a
            className="font-bold border-b border-white border-px"
            href="https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Statement
          </a>
          .
        </label>
      </div>
    </div>
  )
}

WideImageSignup.displayName = 'WideImage.Signup'

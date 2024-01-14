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
        <label htmlFor="optin" className="sr-only">
          Enter you email address
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter you email address"
          className="flex-1 rounded px-3.5 py-2 focus:ring-1 focus:ring-inset"
        />
        <Button title={buttonText || 'Subscribe'} />
      </div>

      <div className="flex items-center flex-none gap-2 ml-1 text-left">
        <input name="favcharacters" id="optin" type="checkbox" className="border rounded-sm" value="name" />
        <label htmlFor="optin" className="text-sm">
          I agree to receive email from Carleton University.
        </label>
        {/* <label htmlFor="optin" className="text-sm">
          I agree to receive email from Carleton University. Read our{' '}
          <a href="www.carleton.ca" style={{ textDecoration: 'underline' }}>
            Privacy Policy
          </a>{' '}
          to learn more.
        </label> */}
      </div>
    </div>
  )
}

WideImageSignup.displayName = 'WideImage.Signup'

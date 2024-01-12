import React from 'react'
import { Button } from '../Button/Button'

export interface WideImageSignupFormProps {
  children?: React.ReactNode
  buttonText?: string
}

export const WideImageSignupForm = ({ buttonText = 'Submit Email' }: WideImageSignupFormProps) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 cu-buttongroup md:flex-1 max-w-4xl justify-center">
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder=""
          className="flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 align-top"
        />
        <Button title={buttonText || 'Subscribe'} />
      </div>
      <div className="flex items-center text-left gap-2">
        <input
          name="favcharacters"
          id="optin"
          type="checkbox"
          className="rounded focus:ring-cu-red-200 text-cu-red border border-cu-black-300"
          value="name"
        />
        <label htmlFor="optin" className="text-sm">
          I agree to receive email from Carleton University. Read our{' '}
          <a href="www.carleton.ca" style={{ textDecoration: 'underline' }}>
            Privacy Policy
          </a>{' '}
          to learn more.
        </label>
      </div>
    </>
  )
}

WideImageSignupForm.displayName = 'SignupForm.SignupForm'

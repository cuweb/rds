import React from 'react'
import { Button } from 'src/components/Button/Button'

export interface SignupFormCMProps {
  children: React.ReactNode
}

export const SignupFormCM = ({ children }: SignupFormCMProps) => {
  return (
    <>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          required
          minlength="4"
          maxlength="8"
          size="10"
          placeholder="Campaign Monitor"
        />
        <Button onClick={() => {}} title={buttonText} />
      </div>
    </>
  )
}

SignupFormCM.displayName = 'SignupForm.CM'

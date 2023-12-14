import React from 'react'

export interface SignupFormMCProps {
  children?: React.ReactNode
}

export const SignupFormMC = ({ children }: SignupFormMCProps) => {
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
          placeholder="Mail Chimp"
        />
      </div>
    </>
  )
}

SignupFormMC.displayName = 'SignupForm.MC'

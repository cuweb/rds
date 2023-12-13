import React from 'react'
import styles from './SignupForm.styles'

export interface SignupFormProps {
  children: React.ReactNode
  header?: string
  text?: string
  type?: 'light' | 'dark' | 'image'
  image?: string
}

export const SignupForm = ({ children, header, text, type = 'light' }: SignupFormProps) => {
  const headerText = header ? header : 'Subscribe to Our Newsletter'
  const bodyText = text ? text : 'Lorem ipsum dolor sit amet'
  const buttonText = 'Subscribe Now'
  return (
    <div className={`${styles.wrapper} ${type}`}>
      <span>{headerText}</span>
      <span>{bodyText}</span>
      <button>{buttonText}</button>
      {children}
    </div>
  )
}

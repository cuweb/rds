import React from 'react'
import styles from './SignupForm.styles'
import { Button } from '../../components/Button/Button'
import { SignupFormCM } from './SignupFormCM'
import { SignupFormMC } from './SignupFormMC'

export interface SignupFormProps {
  children: React.ReactNode
  header?: string
  text?: string
  type?: 'light' | 'dark' | 'image'
  image?: string
}

export const SignupFormWrapper = ({ children, header, text, type = 'light' }: SignupFormProps) => {
  const headerText = header ? header : 'Subscribe to Our Newsletter'
  const bodyText = text ? text : 'Lorem ipsum dolor sit amet'
  const buttonText = 'Subscribe Now'
  return (
    <div
      className={`${styles.wrapper} ${styles.type[type]} z-10 flex flex-1 flex-col last:[&amp;>*]:justify-center m-auto items-center justify-center gap-8 max-w-5xl [&amp;>*]:z-10`}
    >
      <div className="flex flex-auto flex-col gap-6 text-center">
        <h1>{headerText}</h1>
      </div>
      <h3>{bodyText}</h3>
      <div className="flex gap-1.5">{children}</div>
    </div>
  )
}

export const SignupForm = Object.assign(SignupFormWrapper, {
  CampaignMonitor: SignupFormCM,
  MailChimp: SignupFormMC,
})

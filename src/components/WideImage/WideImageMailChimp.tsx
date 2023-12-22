import React from 'react'
import { Button } from '../Button/Button'

export interface WideImageMailChimpProps {
  children?: React.ReactNode
  buttonText?: string
  server?: string
  list?: string
  api?: string
}

export const WideImageMailChimp = ({
  buttonText = 'Submit Email',
  api = 'e7c079463cc61f80c2cbf74814681e85-us21',
  list = 'c683434b75',
  server = 'us21',
}: WideImageMailChimpProps) => {
  const handleSubscribe = async () => {
    try {
      const nameInput = (document.getElementById('name') as HTMLInputElement).value

      const apiEndpoint = `https://${server}.api.mailchimp.com/3.0/lists/${list}/members`
      const token = `Bearer ${api}`

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          email_address: nameInput,
          status: 'pending',
        }),
      })

      if (response.ok) {
        //console.log('Subscription successful')
      } else {
        //console.error('Subscription failed')
      }
    } catch (error) {
      //console.error('Error occurred while subscribing', error)
    }
  }

  return (
    <div className="flex flex-wrap gap-5 cu-buttongroup md:flex-1 w-2/5 justify-center">
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder=""
        className="flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 align-top"
      />
      <Button onClick={handleSubscribe} title={buttonText || 'Subscribe'} />
    </div>
  )
}

WideImageMailChimp.displayName = 'SignupForm.MailChimp'

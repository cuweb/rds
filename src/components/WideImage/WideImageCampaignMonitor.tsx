import React from 'react'
import { Button } from '../Button/Button'

export interface WideImageCampaignMonitorProps {
  children?: React.ReactNode
  buttonText?: string
  list?: string
  api?: string
}

export const WideImageCampaignMonitor = ({
  buttonText = 'Submit Email',
  api = '',
  list = '2BE4EF332AA2E32596E38B640E90561935C92EF54C23F39EFB2814E69C490EEC0AFB85D6532A8F22CE1BC07E6A5E3B21F540672C293F80057843A30BB9A21B0F',
}: WideImageCampaignMonitorProps) => {
  const handleSubscribe = async () => {
    try {
      const nameInput = (document.getElementById('name') as HTMLInputElement).value

      const apiEndpoint = `https://api.createsend.com/api/v3.3/subscribers/${list}.json`
      const token = `Bearer ${api}`

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          EmailAddress: nameInput,
          Name: '',
          Resubscribe: true,
          RestartSubscriptionBasedAutoresponders: true,
          ConsentToTrack: 'No',
          ConsentToSendSms: 'No',
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
        className="flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6 align-top"
      />
      <Button onClick={handleSubscribe} title={buttonText || 'Subscribe'} />
    </div>
  )
}

WideImageCampaignMonitor.displayName = 'WideImage.CampaignMonitor'

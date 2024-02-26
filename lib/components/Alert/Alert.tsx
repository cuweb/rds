import React, { PropsWithChildren } from 'react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline'

export interface AlertProps {
  title: string
  content?: React.ReactNode | string
  type: 'success' | 'error' | 'warning' | 'info'
  textSize?: 'small' | 'large'
}

export const Alert = ({ title, content, type, textSize = 'small' }: PropsWithChildren<AlertProps>) => {
  const alertTextSize = textSize === 'small' ? 'text-sm' : 'text-lg'
  const alertIconSize = textSize === 'small' ? 'w-5 h-5' : 'w-8 h-8'

  const AlertTypes = {
    success: {
      icon: CheckCircleIcon,
      alertHeading: 'text-green-700',
      alertSubhead: 'cu-black-600',
      background: 'bg-green-50',
    },
    warning: {
      icon: ShieldExclamationIcon,
      alertHeading: 'text-yellow-700',
      alertSubhead: 'cu-black-600',
      background: 'bg-yellow-50',
    },
    error: {
      icon: ExclamationCircleIcon,
      alertHeading: 'text-cu-red-700',
      alertSubhead: 'cu-black-600',
      background: 'bg-cu-red-50',
    },
    info: {
      icon: InformationCircleIcon,
      alertHeading: 'text-blue-700',
      alertSubhead: 'cu-black-600',
      background: 'bg-blue-50',
    },
  }

  return (
    <div className={`flex cu-alert cu-alert-${type} rounded-md p-4 my-2 not-prose ${AlertTypes[type].background}`}>
      {React.createElement(AlertTypes[type].icon, {
        className: `${alertIconSize} ${AlertTypes[type].alertHeading}`,
        'aria-hidden': 'true',
      })}
      <div className={`${textSize == 'large' ? 'mt-0.5' : ''} ml-3 space-y-2 w-full`}>
        <p className={`${alertTextSize} ${AlertTypes[type].alertHeading} my-0 font-semibold`}>{title}</p>
        <p className={`${alertTextSize} ${AlertTypes[type].alertSubhead}`}>{content}</p>
      </div>
    </div>
  )
}

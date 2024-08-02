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
  type?: 'success' | 'error' | 'warning' | 'info'
  textSize?: 'sm' | 'lg'
}

export const Alert = ({ title, content, type = 'success', textSize = 'sm' }: PropsWithChildren<AlertProps>) => {
  const alertTextSize = textSize === 'sm' ? 'text-base' : 'text-lg mt-0.5'
  const alertIconSize = textSize === 'sm' ? 'w-6 h-6' : 'w-8 h-8'

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
    <div
      className={`cu-alert cu-alert--${type} cu-component not-prose flex rounded-md p-4 ${AlertTypes[type].background}`}
    >
      {React.createElement(AlertTypes[type].icon, {
        className: `${alertIconSize} ${AlertTypes[type].alertHeading}`,
        'aria-hidden': 'true',
      })}
      <div className="ml-2 w-full">
        <p className={`${AlertTypes[type].alertHeading} ${alertTextSize} font-semibold`}>{title}</p>
        {content && <p className={`${AlertTypes[type].alertSubhead} text-base`}>{content}</p>}
      </div>
    </div>
  )
}

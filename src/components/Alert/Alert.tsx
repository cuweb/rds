import React, { PropsWithChildren } from 'react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline'

export interface AlertProps {
  title: string
  content?: string
  type: 'success' | 'error' | 'warning' | 'info'
  textSize?: 'small' | 'large'
}

const Alert = ({ title, content, type, textSize = 'small' }: PropsWithChildren<AlertProps>) => {
  const alertTextSize = textSize === 'small' ? 'text-sm' : 'text-lg'
  const alertIconSize = textSize === 'small' ? 'w-5 h-5' : 'w-8 h-8'

  const AlertTypes = {
    success: {
      icon: CheckCircleIcon,
      color: 'green',
      text: 'text-green-700',
      background: 'bg-green-50',
    },
    warning: {
      icon: ShieldExclamationIcon,
      color: 'yellow',
      text: 'text-yellow-700',
      background: 'bg-yellow-50',
    },
    error: {
      icon: ExclamationCircleIcon,
      color: 'red',
      text: 'text-cu-red-700',
      background: 'bg-cu-red-50',
    },
    info: {
      icon: InformationCircleIcon,
      color: 'blue',
      text: 'text-blue-700',
      background: 'bg-blue-50',
    },
  }

  return (
    <div className={`flex rounded-md p-4 my-2 not-prose ${AlertTypes[type].background}`}>
      {React.createElement(AlertTypes[type].icon, {
        className: `${alertIconSize} ${AlertTypes[type].text}`,
        'aria-hidden': 'true',
      })}
      <div className={`${textSize == 'large' ? 'mt-0.5' : null} ml-3`}>
        <p className={`${alertTextSize} ${AlertTypes[type].text} my-0 font-semibold`}>{title}</p>
        <p className={`${alertTextSize} ${AlertTypes[type].text} mt-2`}>{content}</p>
      </div>
    </div>
  )
}

export { Alert as Alert }

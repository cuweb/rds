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
  size?: 'sm' | 'md' | 'lg'
}

export const Alert = ({ title, content, type = 'success', size = 'sm' }: PropsWithChildren<AlertProps>) => {
  const AlertSizes = {
    sm: {
      alertTitleSize: 'text-sm md:text-base',
      alertIconSize: 'w-6 h-6',
    },
    md: {
      alertTitleSize: 'text-base md:text-lg mt-0.5',
      alertIconSize: 'w-8 h-8',
    },
    lg: {
      alertTitleSize: 'text-base md:text-2xl mt-1',
      alertIconSize: 'w-10 h-10',
    },
  }

  const AlertTypes = {
    success: {
      icon: CheckCircleIcon,
      alertHeading: 'text-green-700',
      background: 'bg-green-50',
    },
    warning: {
      icon: ShieldExclamationIcon,
      alertHeading: 'text-yellow-700',
      background: 'bg-yellow-50',
    },
    error: {
      icon: ExclamationCircleIcon,
      alertHeading: 'text-cu-red-700',
      background: 'bg-cu-red-50',
    },
    info: {
      icon: InformationCircleIcon,
      alertHeading: 'text-blue-700',
      background: 'bg-blue-50',
    },
  }

  return (
    <div
      className={`cu-alert cu-alert--${type} cu-component not-prose flex rounded-md p-4 ${AlertTypes[type].background}`}
    >
      {React.createElement(AlertTypes[type].icon, {
        className: `${AlertSizes[size].alertIconSize} ${AlertTypes[type].alertHeading}`,
        'aria-hidden': 'true',
      })}
      <div className="ml-3 w-full">
        <p className={`${AlertTypes[type].alertHeading} ${AlertSizes[size].alertTitleSize} font-semibold`}>{title}</p>
        {content && <p className="text-sm md:text-base cu-black-600">{content}</p>}
      </div>
    </div>
  )
}

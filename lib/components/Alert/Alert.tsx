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
    success: CheckCircleIcon,
    warning: ShieldExclamationIcon,
    error: ExclamationCircleIcon,
    info: InformationCircleIcon,
  }

  return (
    <div className={`cu-alert cu-alert--${type} not-prose cu-component flex rounded-md p-4`}>
      {React.createElement(AlertTypes[type], {
        className: `${AlertSizes[size].alertIconSize}`,
        'aria-hidden': 'true',
      })}
      <div className="ml-3 w-full">
        <p className={`${AlertSizes[size].alertTitleSize} font-semibold`}>{title}</p>
        {content && <p className="text-sm md:text-base text-cu-black-900">{content}</p>}
      </div>
    </div>
  )
}

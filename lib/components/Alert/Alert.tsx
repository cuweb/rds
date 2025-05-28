import React, { PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation, faCircleInfo, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

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
      alertTitleSize: 'text-base md:text-xl mt-1',
      alertIconSize: 'w-10 h-10',
    },
  }

  const AlertTypes = {
    success: faCircleCheck,
    warning: faCircleExclamation,
    error: faCircleInfo,
    info: faShieldHalved,
  }

  return (
    <div className={`cu-alert cu-alert--${type} not-prose flex rounded-md p-4`}>
      <FontAwesomeIcon
        icon={AlertTypes[type]}
        className={`${AlertSizes[size].alertIconSize} flex-shrink-0 mt-0.5`}
        aria-hidden="true"
      />
      <div className="ml-3 w-full">
        <p className={`${AlertSizes[size].alertTitleSize} font-semibold`}>{title}</p>
        {content && <p className="text-sm md:text-base text-cu-black-900">{content}</p>}
      </div>
    </div>
  )
}

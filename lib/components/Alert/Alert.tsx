import React, { PropsWithChildren } from 'react'
import { Icon } from '../Icon'
export interface AlertProps {
  title: string
  content?: React.ReactNode | string
  type?: 'success' | 'error' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
}

export const Alert = ({ title, content, type = 'success', size = 'sm' }: PropsWithChildren<AlertProps>) => {
  const AlertSizes = {
    sm: { alertTitleSize: 'text-sm md:text-base', alertIconSize: 24 },
    md: { alertTitleSize: 'text-base md:text-lg mt-0.5', alertIconSize: 32 },
    lg: { alertTitleSize: 'text-base md:text-xl mt-1', alertIconSize: 40 },
  }

  const AlertTypes = {
    success: 'circle-check',
    warning: 'shield-exclamation',
    error: 'circle-exclamation',
    info: 'circle-info',
  }

  return (
    <div className={`cu-alert cu-alert--${type} not-prose flex rounded-md p-4`}>
      <Icon
        name={AlertTypes[type]}
        iconPath="/assets/font-awesome/"
        size={AlertSizes[size].alertIconSize}
        color={type === 'error' ? '#d32f2f' : type === 'warning' ? '#fbc02d' : type === 'info' ? '#1976d2' : '#388e3c'}
      />
      <div className="ml-3 w-full">
        <p className={`${AlertSizes[size].alertTitleSize} font-semibold`}>{title}</p>
        {content && <p className="text-sm md:text-base text-cu-black-900">{content}</p>}
      </div>
    </div>
  )
}

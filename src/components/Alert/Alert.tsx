import { PropsWithChildren } from 'react'
import { rdsTextColor, rdsBgColor, rdsBgOpacity } from '../../utils/optionClasses'
import { Icon } from '../../components/Icon/Icon'
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
  const alertIconSize = textSize === 'small' ? '5' : '8'

  const AlertTypes = {
    success: {
      icon: CheckCircleIcon,
      color: 'green',
    },
    warning: {
      icon: ShieldExclamationIcon,
      color: 'yellow',
    },
    error: {
      icon: ExclamationCircleIcon,
      color: 'red',
    },
    info: {
      icon: InformationCircleIcon,
      color: 'blue',
    },
  }

  const colorClass = type ? AlertTypes[type].color : ''

  return (
    <div
      className={`flex rounded-md p-4 not-prose ${rdsBgColor[colorClass as keyof typeof rdsBgColor]} ${
        rdsBgOpacity[20]
      }`}
    >
      <Icon icon={AlertTypes[type].icon} color={AlertTypes[type].color} size={alertIconSize}></Icon>
      <div className={`${textSize == 'large' ? 'mt-0.5' : null} ml-3`}>
        <p className={`${alertTextSize} ${rdsTextColor[colorClass as keyof typeof rdsTextColor]} my-0 font-semibold`}>
          {title}
        </p>
        <p className={`${alertTextSize} ${rdsTextColor[colorClass as keyof typeof rdsTextColor]} mt-2`}>{content}</p>
      </div>
    </div>
  )
}

export { Alert as Alert }

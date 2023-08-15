import React, { Fragment, PropsWithChildren, useState } from 'react'
import { Transition } from '@headlessui/react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

export interface AlertBaseProps {
  type: 'success' | 'error' | 'warning' | 'info'
  textSize?: 'small' | 'large'
  isPersistent?: boolean
}

const Alerter = ({ children }: PropsWithChildren) => {
  return (
    <div aria-live="assertive" className="cu-alert not-prose top-20">
      <div className="w-full items-center space-y-4 sm:items-end">{children}</div>
    </div>
  )
}

const Title = ({ children }: PropsWithChildren) => {
  return <h3 className="font-medium ">{children}</h3>
}

const Content = ({ children }: PropsWithChildren) => {
  return <div className="mt-2 ">{children}</div>
}

const AlertBase = ({ children, type, textSize = 'small', isPersistent = false }: PropsWithChildren<AlertBaseProps>) => {
  const [showAlert, setShowAlert] = useState(true)

  const alertTextSize = textSize === 'small' ? 'text-sm' : 'text-lg'
  const alertIconSize = textSize === 'small' ? 'h-5 w-5' : 'h-8 w-8'

  const AlertTypes = {
    success: {
      icon: CheckCircleIcon,
      text: 'text-green-600',
      bg: 'bg-green-50',
    },
    warning: {
      icon: ShieldExclamationIcon,
      text: 'text-yellow-600',
      bg: 'bg-yellow-50',
    },
    error: {
      icon: ExclamationCircleIcon,
      text: 'text-cu-red-600',
      bg: 'bg-cu-red-50',
    },
    info: {
      icon: InformationCircleIcon,
      text: 'text-blue-600',
      bg: 'bg-blue-50',
    },
  }

  return (
    <Transition
      show={showAlert}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`rounded-md ${AlertTypes[type].bg} p-4`}>
        <div className="flex">
          <div className="flex-shrink-0">
            {React.createElement(AlertTypes[type].icon, {
              className: `${alertIconSize} ${AlertTypes[type].text}`,
              'aria-hidden': 'true',
            })}
          </div>
          <div className={`ml-3 ${AlertTypes[type].text} ${alertTextSize}`}>{children}</div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              {!isPersistent && (
                <button
                  type="button"
                  className={`inline-flex rounded-md ${AlertTypes[type].bg} p-1.5 ${AlertTypes[type].text} hover:${AlertTypes[type].bg} focus:outline-none focus:ring-2 focus:ring-offset-2`}
                  onClick={() => {
                    setShowAlert(false)
                  }}
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

AlertBase.displayName = 'Alert'
Title.displayName = 'Alert.Title'
Content.displayName = 'Alert.Content'

export const Alert = Object.assign(AlertBase, {
  Alerter,
  Title,
  Content,
})

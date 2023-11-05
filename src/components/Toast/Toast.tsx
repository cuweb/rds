import React, { Fragment, PropsWithChildren, useState } from 'react'
import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline'

export interface ToastBaseProps {
  type: 'success' | 'error' | 'warning' | 'info'
}

const Toaster = ({ children }: PropsWithChildren) => {
  return (
    <div
      aria-live="assertive"
      className="not-prose pointer-events-none fixed inset-0 top-20 z-40 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">{children}</div>
    </div>
  )
}

const Title = ({ children }: PropsWithChildren) => {
  return <p className="text-sm font-medium text-gray-900">{children}</p>
}

const Content = ({ children }: PropsWithChildren) => {
  return <p className="mt-1 text-sm text-gray-500">{children}</p>
}

const ToastBase = ({ children, type }: PropsWithChildren<ToastBaseProps>) => {
  const [showToast, setShowToast] = useState(true)

  const toastTypes = {
    success: {
      icon: CheckCircleIcon,
      color: 'text-green-400',
    },
    warning: {
      icon: ShieldExclamationIcon,
      color: 'text-yellow-400',
    },
    error: {
      icon: ExclamationCircleIcon,
      color: 'text-cu-red',
    },
    info: {
      icon: InformationCircleIcon,
      color: 'text-blue-600',
    },
  }

  return (
    <Transition
      show={showToast}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="cu-toast pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {React.createElement(toastTypes[type].icon, {
                className: `w-6 h-6 ${toastTypes[type].color}`,
                'aria-hidden': 'true',
              })}
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">{children}</div>
            <div className="ml-4 flex flex-shrink-0">
              <button
                type="button"
                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => {
                  setShowToast(false)
                }}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

// Export Component
export const Toast = Object.assign(ToastBase, {
  Toaster,
  Title,
  Content,
})

// Display Name
ToastBase.displayName = 'Toast'
Title.displayName = 'Toast.Title'
Content.displayName = 'Toast.Content'
Toaster.displayName = 'Toaster'

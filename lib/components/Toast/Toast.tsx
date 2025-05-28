import { Fragment, PropsWithChildren, useState } from 'react'
import { Transition } from '@headlessui/react'
import CircleCheckIcon from '../Icons/CircleCheckIcon'
import CircleExclamationIcon from '../Icons/CircleExclamationIcon'
import CircleInfoIcon from '../Icons/CircleInfoIcon'
import ShieldHalvedIcon from '../Icons/ShieldHalvedIcon'
import XmarkIcon from '../Icons/XmarkIcon'

export interface ToastBaseProps {
  type: 'success' | 'error' | 'warning' | 'info'
}

const Toaster = ({ children }: PropsWithChildren) => {
  return (
    <div
      aria-live="assertive"
      className="not-prose pointer-events-none z-[100] fixed top-16 bottom-0 left-0 right-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
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
      icon: <CircleCheckIcon className="w-6 h-6 text-green-400" />,
    },
    warning: {
      icon: <ShieldHalvedIcon className="w-6 h-6 text-yellow-400" />,
    },
    error: {
      icon: <CircleExclamationIcon className="w-6 h-6 text-cu-red" />,
    },
    info: {
      icon: <CircleInfoIcon className="w-6 h-6 text-blue-600" />,
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
            <div className="flex-shrink-0">{toastTypes[type].icon}</div>
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
                <XmarkIcon className="h-5 w-5" />
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

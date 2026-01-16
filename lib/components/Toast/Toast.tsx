import { PropsWithChildren, useState } from 'react'
import { Icon } from '../Icon/Icon'
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
  const [shouldRender, setShouldRender] = useState(true)

  const toastTypes = {
    success: {
      icon: <Icon name="circle-check" size={24} color="#4ade80" aria-hidden="true" />,
    },
    warning: {
      icon: <Icon name="shield-exclamation" size={24} color="#facc15" aria-hidden="true" />,
    },
    error: {
      icon: <Icon name="circle-exclamation" size={24} color="#e91c24" aria-hidden="true" />,
    },
    info: {
      icon: <Icon name="circle-info" size={24} color="#2563eb" aria-hidden="true" />,
    },
  }

  const handleClose = () => {
    setShowToast(false)
    // Remove the element after transition completes
    setTimeout(() => {
      setShouldRender(false)
    }, 200) // Match the duration-200 class
  }

  if (!shouldRender) return null

  return (
    <div
      className={`cu-toast pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transform transition ease-in duration-200 ${
        showToast
          ? 'translate-y-0 opacity-200 sm:translate-x-0 '
          : 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
      }`}
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
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>
                <Icon name="xmark" size={20} className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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

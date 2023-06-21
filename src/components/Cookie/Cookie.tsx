/* eslint-disable jsx-a11y/anchor-is-valid */
export const Cookie = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="pointer-events-auto mx-auto w-2/3 rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-base leading-6 text-gray-900">
            This site uses cookies to offer you a better browsing experience. Find out more on{' '}
            <a href="#" className="font-semibold text-cu-red-600">
              how we use cookies and how you can change your settings.
            </a>
          </p>
          <button
            type="button"
            className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Ok, Got it.
          </button>
        </div>
      </div>
    </div>
  )
}

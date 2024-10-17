import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// interface FormLoaderWrapperProps {
//   children: React.ReactNode
// }

// // Define FormLoader component
// export const FormLoaderWrapper = ({ children }: FormLoaderWrapperProps) => {
//   // Return FormLoader with children and RowLoader as property
//   return <div className="cu-loader-form cu-component flex flex-col gap-8 w-full">{children}</div>
// }

const styles = {
  mobileButtons: `relative inline-flex items-center px-4 py-2 text-sm font-medium text-cu-black-600 bg-white border border-cu-black-200 rounded-md hover:bg-cu-black-50`,
  pageListNumbers: `flex items-center bg-white py-2 px-4 text-sm text-cu-black-600 border-r border-cu-black-100 last:border-0 cursor-pointer hover:bg-cu-black-50`,
  pageListArrows: `text-cu-black-400 px-2.5`,
  pulseElement: `w-6 h-6 bg-cu-black-200 rounded animate-pulse`,
}

export interface PaginationLoaderProps {
  hasBorder?: boolean
  hasSpacing?: boolean
}

export const PaginationLoader = ({ hasBorder, hasSpacing }: PaginationLoaderProps) => {
  const borderStyles = hasBorder ? 'py-5 border-t border-cu-black-100' : ''
  const spacingStyles = hasSpacing ? 'pl-6 pr-5' : ''

  const count = 5

  return (
    <>
      <div className="animate-pulse">
        <div
          className={`cu-pagination cu-component not-prose mt-8 flex items-center justify-between first:mt-0 ${borderStyles} ${spacingStyles}`}
        >
          <div className="flex justify-between flex-1 sm:hidden">
            <button className={`${styles.mobileButtons}`}>Previous</button>
            <button className={`${styles.mobileButtons}`}>Next</button>
          </div>

          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <span className="block h-4 w-48 rounded-md bg-cu-black-200"></span>

            <ul className="inline-flex overflow-hidden border rounded-md border-cu-black-100">
              <li className={`${styles.pageListNumbers} ${styles.pageListArrows}`}>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </li>
              <div className="flex justify-between space-x-2 gap-2 ">
                {/* Pulse elements as placeholders for the pagination numbers */}

                {Array.from({ length: count }).map((_, index) => (
                  <li key={index} className={`${styles.pageListNumbers} `}>
                    <div className={styles.pulseElement}></div>
                  </li>
                ))}
              </div>
              <li className={`${styles.pageListNumbers} ${styles.pageListArrows}`}>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </li>
            </ul>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
}

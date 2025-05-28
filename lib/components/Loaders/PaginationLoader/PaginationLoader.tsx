import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ButtonLoader } from '../ButtonLoader/ButtonLoader'

const styles = {
  mobileButtons: `relative inline-flex items-center px-4 py-2 text-sm font-medium text-cu-black-600 bg-white border border-cu-black-200 rounded-md hover:bg-cu-black-50`,
  pageListNumbers: `flex items-center bg-white py-2 px-4 text-sm text-cu-black-600 border-r border-cu-black-100 last:border-0 cursor-pointer hover:bg-cu-black-50`,
  pageListArrows: `text-cu-black-400 px-2.5`,
  pulseElement: `w-6 h-6 bg-cu-black-200 rounded animate-pulse`,
}

export interface PaginationLoaderProps {
  hasBorder?: boolean
  pageCount?: number
}

export const PaginationLoader = ({ hasBorder, pageCount = 5 }: PaginationLoaderProps) => {
  const borderStyles = hasBorder ? 'py-5 border-t border-cu-black-100' : ''

  return (
    <div
      className={`animate-pulse cu-pagination cu-component-updated not-prose mt-8 flex items-center justify-between first:mt-0 ${borderStyles}`}
    >
      <div className="flex justify-between flex-1 sm:hidden">
        <ButtonLoader number={2} isSmall={true} />
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <span className="block h-4 w-48 rounded-md bg-cu-black-200"></span>

        <ul className="inline-flex overflow-hidden border rounded-md border-cu-black-100">
          <li className={`${styles.pageListNumbers} ${styles.pageListArrows}`}>
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
          </li>
          <div className="flex justify-between space-x-2 gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <li key={index} className={styles.pageListNumbers}>
                <div className={styles.pulseElement}></div>
              </li>
            ))}
          </div>
          <li className={`${styles.pageListNumbers} ${styles.pageListArrows}`}>
            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
          </li>
        </ul>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

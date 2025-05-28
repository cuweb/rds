import { useEffect, useState } from 'react'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon'
import ChevronRightIcon from '../Icons/ChevronRightIcon'

import usePagination, { DOTS } from '../../hooks/usePagination'

export interface PaginationProps {
  hasBorder?: boolean
  hasSpacing?: boolean
  totalCount: number
  siblingCount: number
  pageSize: number
  callback: (k: [number?, number?]) => void
  callbackPage: (page: number) => void
  currentPageNumber?: number
}

export const Pagination = ({
  hasBorder,
  hasSpacing,
  totalCount,
  siblingCount,
  pageSize,
  callback,
  callbackPage,
  currentPageNumber,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(currentPageNumber || 1)

  const paginationRange = usePagination(totalCount, pageSize, siblingCount, currentPage)
  const onNext = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const onPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const onCurrent = (pageNumber: number) => {
    setCurrentPage(Number(pageNumber))
  }

  const borderStyles = hasBorder ? 'py-5 border-t border-cu-black-100' : ''
  const spacingStyles = hasSpacing ? 'pl-6 pr-5' : ''
  const startResult = (currentPage - 1) * pageSize + 1

  let endResult = totalCount
  let lastPage = 0

  useEffect(() => {
    callback([startResult, endResult])
    callbackPage(currentPage)
  }, [startResult, endResult, callback, callbackPage, currentPage])

  if (totalCount > currentPage * pageSize) {
    endResult = currentPage * pageSize
  }

  if (paginationRange !== undefined) {
    lastPage = Number(paginationRange[paginationRange.length - 1])
  }

  if (currentPage === 0 || (paginationRange !== undefined && paginationRange.length < 2)) {
    return null
  }

  const styles = {
    mobileButtons: `relative inline-flex items-center px-4 py-2 text-sm font-medium text-cu-black-600 bg-white border border-cu-black-200 rounded-md hover:bg-cu-black-50`,
    pageListWrapper: `flex items-center bg-white text-cu-black-600 border-r border-cu-black-100 last:border-0`,
    pageListNumbers: `text-sm py-2 px-4 cursor-pointer hover:bg-cu-black-50`,
    pageListArrows: `text-cu-black-400 px-2.5`,
  }

  return (
    <div
      className={`cu-pagination cu-component-updated not-prose mt-8 flex items-center justify-between first:mt-0 ${borderStyles} ${spacingStyles}`}
    >
      <div className="flex justify-between flex-1 sm:hidden">
        <button onClick={onPrevious} className={`${styles.mobileButtons}`}>
          Previous
        </button>
        <button onClick={onNext} className={`${styles.mobileButtons}`}>
          Next
        </button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <p className="text-sm text-cu-black-800">
          Showing <span className="font-semibold">{startResult}</span> to{' '}
          <span className="font-semibold">{endResult}</span> of <span className="font-semibold">{totalCount}</span>{' '}
          results
        </p>

        <nav aria-label="Pagination">
          <ul className="inline-flex overflow-hidden border rounded-md border-cu-black-100">
            <li className={`${styles.pageListWrapper} !my-0`} onClick={onPrevious}>
              <button className={`${styles.pageListNumbers} ${styles.pageListArrows}`}>
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
            </li>

            {paginationRange !== undefined &&
              paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                  return (
                    <li key={index} className={`${styles.pageListWrapper} ${styles.pageListNumbers} !my-0`}>
                      &#8230;
                    </li>
                  )
                }
                return (
                  <li key={index} className={`${styles.pageListWrapper} !my-0`}>
                    <button
                      className={`${styles.pageListNumbers} ${
                        Number(pageNumber) === currentPage ? 'font-bold text-cu-red' : ''
                      }`}
                      onClick={() => onCurrent(Number(pageNumber))}
                    >
                      {pageNumber}
                    </button>
                  </li>
                )
              })}
            <li className={`${styles.pageListWrapper} !my-0`}>
              <button className={`${styles.pageListNumbers} ${styles.pageListArrows}`} onClick={onNext}>
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

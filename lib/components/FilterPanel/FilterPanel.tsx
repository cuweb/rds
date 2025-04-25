import { useEffect } from 'react'
import filter from './filter'

export const FilterPanel = () => {
  useEffect(() => {
    filter()
  }, [])

  return (
    <div className="cu-filter text-sm font-medium">
      <div className="border rounded-tl-lg rounded-tr-lg border-cu-black-100 bg-gray-50 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center justify-between gap-4">
          {/* Left Side Sort option */}
          <div className="cu-filter__dropdown relative">
            <button
              className="cu-filter__dropdown-toggle inline-flex justify-center text-sm font-medium text-cu-black-800 group hover:text-cu-red"
              type="button"
              id="sortMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="flex-shrink-0 w-5 h-5 ml-1 text-cu-black-300 group-hover:text-cu-black-600"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <ul
              className="cu-filter__dropdown-menu hidden not-prose list-none absolute z-10 left-0 w-40 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              aria-labelledby="sortMenuButton"
            >
              <li className="!my-0">
                <a href="#" className="text-cu-black-600 block px-4 py-2 hover:bg-gray-200">
                  Newest to oldest
                </a>
              </li>
              <li className="!my-0">
                <a href="#" className="text-cu-black-600 block px-4 py-2 hover:bg-gray-200">
                  Oldest to newest
                </a>
              </li>
              <li className="!my-0">
                <button className="text-cu-black-600 block px-4 py-2 hover:bg-gray-200">Oldest to newest</button>
              </li>
            </ul>
          </div>

          {/* Right Side Sort option */}
          <div>
            <div className="cu-filter__dropdown relative">
              <button
                className="cu-filter__dropdown-toggle inline-flex justify-center text-sm font-medium text-cu-black-800 group hover:text-cu-red"
                type="button"
                id="audienceMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Audience
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="flex-shrink-0 w-5 h-5 ml-1 text-cu-black-300 group-hover:text-cu-black-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                className="cu-filter__dropdown-menu hidden not-prose list-none absolute z-10 left-0 w-40 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-4 flex flex-col gap-2"
                aria-labelledby="audienceMenuButton"
              >
                <li className="!my-0 flex items-center">
                  <input
                    id="filter-audience-0"
                    name="audience[]"
                    type="checkbox"
                    className="w-4 h-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"
                    value="staff"
                  />
                  <label htmlFor="filter-audience-0" className="pr-6 ml-3 text-sm whitespace-nowrap text-cu-black-600">
                    Staff
                  </label>
                </li>
                <li className="!my-0 flex items-center">
                  <input
                    id="filter-audience-1"
                    name="audience[]"
                    type="checkbox"
                    className="w-4 h-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"
                    value="student"
                  />
                  <label htmlFor="filter-audience-1" className="pr-6 ml-3 text-sm whitespace-nowrap text-cu-black-600">
                    Student
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-t-0 rounded-bl-lg rounded-br-lg border-cu-black-100 px-4 py-4 sm:px-6 sm:py-5">
        dasd
      </div>
    </div>
  )
}

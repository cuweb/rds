export interface SortOptions {
  label: string
  value: string
  selected?: boolean
}

export interface FilterValues {
  value: string
  label: string
  checked: boolean
}

export interface FilterOptions {
  id: string
  name: string
  options: FilterValues[]
}

export interface IFilterTopProp {
  children?: React.ReactNode
  sortOptions?: SortOptions[]
  filterOptions?: FilterOptions[]
}

export const Top = ({ sortOptions, filterOptions }: IFilterTopProp) => {
  return (
    <div className="border rounded-tl-lg rounded-tr-lg border-cu-black-100 bg-gray-50 px-4 py-4 sm:px-6 sm:py-5">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side Sort option */}
        {sortOptions && (
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
              {sortOptions.map((option, index) => (
                <li key={index} className="!my-0">
                  <a
                    href="#"
                    data-sort={option.value}
                    className={`text-cu-black-600 block px-4 py-2 hover:bg-gray-200 ${option.selected ? 'bg-gray-100' : ''}`}
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Right Side Sort option */}
        {filterOptions && (
          <div className="ms-auto">
            <div className="flex items-center gap-2 mb-4">
              {filterOptions.map((filterOption, index) => (
                <div key={index} className="cu-filter__dropdown relative">
                  <button
                    className="cu-filter__dropdown-toggle inline-flex justify-center text-sm font-medium text-cu-black-800 group hover:text-cu-red"
                    type="button"
                    id={`${filterOption.id}MenuButton`}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {filterOption.name}
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
                    className="cu-filter__dropdown-menu hidden not-prose list-none absolute z-10 left-0 w-40 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-4"
                    aria-labelledby={`${filterOption.id}MenuButton`}
                  >
                    {filterOption.options.map((option, optionIndex) => (
                      <li
                        className={`flex items-center ${optionIndex !== filterOption.options.length - 1 ? 'mb-4' : ''}`}
                        key={optionIndex}
                      >
                        <input
                          id={`filter-${option.value}-${index}`}
                          name={`${filterOption.id}[]`}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="w-4 h-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"
                          value={option.value}
                        />
                        <label
                          htmlFor={`filter-${option.value}-${index}`}
                          className="pr-6 ml-3 text-sm whitespace-nowrap text-cu-black-600"
                        >
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Top

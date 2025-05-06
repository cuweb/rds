import Dropdown from './dropdown'

class Filter extends Dropdown {
  private filter: HTMLElement

  // eslint-disable-next-line no-undef
  private sortingItems: NodeListOf<HTMLElement>

  // eslint-disable-next-line no-undef
  private filteringItems: NodeListOf<HTMLElement>

  private activeFilterPanel: HTMLElement | null
  // eslint-disable-next-line no-undef
  private activeFilterRemoveBtns: NodeListOf<HTMLElement>

  // eslint-disable-next-line no-undef
  private dropdownItems: NodeListOf<HTMLElement>

  public _activeFilterItems: {
    sortBy?: string
    filterBy: { [key: string]: string[] }
  } = {
    sortBy: '',
    filterBy: {},
  }

  constructor(filterElement: HTMLElement) {
    super(filterElement)

    this.filter = filterElement as HTMLElement

    this.sortingItems = this.filter.querySelectorAll('.cu-filter__sorting-item')

    this.filteringItems = this.filter.querySelectorAll('.cu-filter__filtering-item')

    this.activeFilterPanel = this.filter.querySelector('.cu-filter__active-filter-panel')
    this.activeFilterRemoveBtns = this.filter.querySelectorAll('.cu-filter__active-filter-remove')

    this.dropdownItems = this.filter.querySelectorAll('.cu-filter__dropdown-toggle')

    this.init()
  }

  init() {
    this.activeSortItemLoad()
    this.sortItemClick()
    this.setActiveFilterItems()
    this.activeFilterItemLoad()
    this.filterItemClick()
    this.activeFilterRemoveBtnsClick()
  }

  /**
   * Emits a custom event named 'filterChange' with the currently active filter items as its detail.
   * If the filter element is not defined, logs an error to the console and exits the function.
   *
   * @throws {Error} Logs an error to the console if the filter element is not defined.
   */
  emitActiveFilterChange() {
    if (!this.filter) {
      console.error('Filter element is not defined.')
      return
    }

    const event = new CustomEvent('filterChange', { detail: this._activeFilterItems })

    this.filter.dispatchEvent(event)
  }

  /**
   * Updates the active filter items based on the dropdown elements.
   *
   * This method iterates through the `dropdownItems` collection and determines
   * the type of filter for each dropdown using the `data-filter-type` attribute.
   * If the filter type is 'sort', it resets the `sortBy` property of `_activeFilterItems` to an empty string.
   * For other filter types, it resets the corresponding property in `_activeFilterItems` to an empty array.
   *
   * If `dropdownItems` is not defined, the method exits early without making any changes.
   */
  setActiveFilterItems() {
    if (!this.dropdownItems) {
      return
    }

    this.dropdownItems.forEach((dropdown) => {
      const filterType = dropdown.getAttribute('data-filter-type')
      if (filterType) {
        this._activeFilterItems.filterBy[filterType] = []
      }
    })
  }

  /**
   * Load the active filter items when there is already a selected filter item.
   */
  activeFilterItemLoad() {
    if (!this.filteringItems) {
      return
    }
    this.filteringItems.forEach((item) => {
      this.filterItemClickHandler(item as HTMLInputElement)
    })
  }

  /**
   * Load the active sort item when there is already a selected sort item.
   */
  activeSortItemLoad() {
    if (!this.sortingItems) {
      return
    }

    this.sortingItems.forEach((item) => {
      const isSelected = item.getAttribute('data-selected')
      if (isSelected === 'true') {
        this._activeFilterItems.sortBy = item.getAttribute('data-sort') || ''
      }
    })
  }

  sortItemClick() {
    if (!this.sortingItems) {
      return
    }

    this.sortingItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.stopPropagation()
        const target = event.currentTarget as HTMLInputElement

        this.sortItemClickHandler(target as HTMLInputElement)
      })
    })
  }

  filterItemClick() {
    if (!this.filteringItems) {
      return
    }

    this.filteringItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.stopPropagation()

        const target = event.target as HTMLInputElement
        this.filterItemClickHandler(target)

        this.emitActiveFilterChange()
      })
    })
  }

  activeFilterRemoveBtnsClick() {
    if (!this.activeFilterRemoveBtns) {
      return
    }

    this.activeFilterRemoveBtns.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.stopPropagation()

        const target = event.currentTarget as HTMLInputElement

        const value = target.getAttribute('data-label')

        if (!value) {
          return
        }

        const filterType = target.getAttribute('data-filter-type')

        if (filterType && this._activeFilterItems.filterBy[filterType]) {
          this._activeFilterItems.filterBy[filterType] = this._activeFilterItems.filterBy[filterType].filter(
            (item: string) => item !== value,
          )
        }
        this.unselectFilterItem(value)
        this.removeFromActiveFilterPanel(value)

        this.emitActiveFilterChange()
      })
    })
  }

  /**
   * Handles the click event for a sort item in the filter panel.
   *
   * This method performs the following actions:
   * 1. Unselects any previously selected sort item.
   * 2. Retrieves the sort value from the clicked item's `data-sort` attribute.
   * 3. Marks the clicked item as selected by setting its `data-selected` attribute
   *    to "true" and adding a CSS class for visual indication.
   * 4. Updates the active filter's `sortBy` property with the retrieved value.
   * 5. Closes all dropdown menus in the filter panel.
   *
   * @param item - The HTML input element representing the clicked sort item.
   */
  sortItemClickHandler(item: HTMLInputElement) {
    this.unselectSortItem()

    const value = item.getAttribute('data-sort')

    item.setAttribute('data-selected', 'true')
    item.classList.add('bg-gray-100')
    this._activeFilterItems.sortBy = value || ''

    this.closeAllDropdowns()
  }

  /**
   * Unselects all sorting items by updating their attributes and classes.
   *
   * This method iterates through the `sortingItems` array and performs the following actions
   * for each item:
   * - Sets the `data-selected` attribute to `'false'`.
   * - Removes the `bg-gray-100` CSS class.
   *
   * If `sortingItems` is not defined, the method exits early without performing any actions.
   */
  unselectSortItem() {
    if (!this.sortingItems) {
      return
    }

    this.sortingItems.forEach((item) => {
      if (item) {
        item.setAttribute('data-selected', 'false')
        item.classList.remove('bg-gray-100')
      }
    })
  }

  /**
   * Handles the click event for a filter item in the filter panel.
   * Toggles the selection state of the clicked item and updates the active filter items accordingly.
   *
   * @param item - The HTML element representing the filter item that was clicked.
   *                It is expected to have a `data-label` attribute containing its value.
   *
   * Behavior:
   * - If the item is already selected:
   *   - Removes the item's value from the `_activeFilterItems` array.
   * - If the item is not selected:
   *   - Adds the item's value to the `_activeFilterItems` array.
   */
  filterItemClickHandler(item: HTMLInputElement) {
    const value = item.getAttribute('data-label')
    const filterType = item.getAttribute('data-filter-type')

    if (value && filterType) {
      if (!item.checked) {
        const index = this._activeFilterItems.filterBy[filterType]?.indexOf(value)
        if (index !== undefined && index > -1) {
          this._activeFilterItems.filterBy[filterType].splice(index, 1)
        }
        this.removeFromActiveFilterPanel(value)
      } else {
        this._activeFilterItems.filterBy[filterType].push(value)
        this.addToActiveFilterPanel(value, filterType)
      }
    }
  }

  /**
   * Adds a filter item to the active filter panel and sets up the necessary event listeners
   * for the remove button associated with the newly added filter item.
   *
   * @param item - The filter item to be added to the active filter panel. If the item is an
   * empty string or the `activeFilterPanel` is not defined, the function will return early.
   *
   */
  addToActiveFilterPanel(item: string, filterType: string) {
    if (!this.activeFilterPanel || !item || !filterType) {
      return
    }

    const filterItem = `<div class="flex items-center gap-0.5 pl-3 pe-2 py-1 border rounded-lg border-cu-black-100">
          <span>${item}</span>
          <button
            type="button"
            class="cu-filter__active-filter-remove flex flex-shrink-0 w-4 h-4 p-1 ml-1 rounded-full text-cu-black-400 hover:bg-cu-red hover:text-white"
            data-label="${item}"
            data-filter-type="${filterType}"
          >
            <span class="sr-only">Remove filter for ${item}</span>
            <svg class="w-2 h-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
              <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7"></path>
            </svg>
          </button>
        </div>`

    this.activeFilterPanel.insertAdjacentHTML('beforeend', filterItem)

    // Add event listener to the newly added remove button
    this.activeFilterRemoveBtns = this.filter.querySelectorAll('.cu-filter__active-filter-remove')
    this.activeFilterRemoveBtnsClick()
  }

  /**
   * Removes an item from the active filter panel if it exists.
   *
   * @param item - The label of the item to be removed from the active filter panel.
   *                If the item is not provided or the active filter panel is not set,
   *                the method will return without performing any action.
   *
   * This method searches for an element within the active filter panel that matches
   * the provided `item` label using a `data-label` attribute. If such an element is found,
   * it removes the element's parent from the DOM.
   */
  removeFromActiveFilterPanel(item: string) {
    if (!this.activeFilterPanel || !item) {
      return
    }

    const filterItem = this.activeFilterPanel.querySelector(`[data-label="${item}"]`)
    if (filterItem) {
      filterItem.parentElement?.remove()

      const item = filterItem.getAttribute('data-label')
      if (!item) {
        return
      }
      this.unselectFilterItem(item)
    }
  }

  /**
   * Retrieves the currently active filter items.
   *
   * @return An array or collection of active filter items.
   */
  get activeFilterItems() {
    return this._activeFilterItems
  }

  /**
   * Unselects a dropdown item by its label.
   *
   * This method iterates through the dropdown menu items and finds the checkbox
   * input element that matches the provided label. If a matching checkbox is found,
   * it is unchecked.
   *
   * @param item - The label of the dropdown item to unselect. If the label is not provided
   *               or is falsy, the method will return without performing any action.
   */
  unselectFilterItem(item: string) {
    if (!item) {
      return
    }

    this.filteringItems.forEach((dropdownItem) => {
      if (dropdownItem && dropdownItem.getAttribute('data-label') == item) {
        ;(dropdownItem as HTMLInputElement).checked = false
      }
    })
  }

  /**
   * Removes the checked dropdown items and remove the active filter panel.
   */
  unselectAllFilterMenuItems() {
    if (!this.filteringItems) {
      return
    }

    this.filteringItems.forEach((item) => {
      const input = item.querySelector('input[type="checkbox"]') as HTMLInputElement
      if (input) {
        const value = input.getAttribute('data-label')
        input.checked = false

        if (value) {
          this.removeFromActiveFilterPanel(value)
        }
      }
    })

    this._activeFilterItems.filterBy = {}
    this._activeFilterItems.sortBy = ''
  }

  /**
   * Cleans up resources and performs necessary teardown operations for the filter panel.
   * Specifically, it ensures that all dropdowns associated with the filter panel are closed.
   */
  destroy() {
    this.unselectAllFilterMenuItems()
  }
}

const FilterActions = () => {
  const filterElements = document.querySelectorAll('.cu-filter')

  if (!filterElements) {
    return
  }

  const instances: Filter[] = []

  filterElements.forEach((filterElement) => {
    const filter = new Filter(filterElement as HTMLElement)

    instances.push(filter)
  })

  return {
    destroy: () => {
      instances.forEach((instance) => instance.destroy())
    },
  }
}

export default FilterActions

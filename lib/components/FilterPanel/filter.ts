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

  public _activeFilterItems: {
    sortBy: string
    filterBy: string[]
  } = {
    sortBy: '',
    filterBy: [],
  }

  constructor(filterElement: HTMLElement) {
    super(filterElement)

    this.filter = filterElement as HTMLElement

    this.sortingItems = this.filter.querySelectorAll('.cu-filter__sorting-item')

    this.filteringItems = this.filter.querySelectorAll('.cu-filter__filtering-item')

    this.activeFilterPanel = this.filter.querySelector('.cu-filter__active-filter-panel')
    this.activeFilterRemoveBtns = this.filter.querySelectorAll('.cu-filter__active-filter-remove')

    this.init()
  }

  init() {
    this.activeFilterItemLoad()
    this.activeSortItemLoad()
    this.filterItemClick()
    this.activeFilterRemoveBtnsClick()
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

  activeSortItemLoad() {
    if (!this.sortingItems) {
      return
    }
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

        this._activeFilterItems.filterBy = this._activeFilterItems.filterBy.filter((item) => item !== value)
        this.unselectFilterItem(value)
        this.removeFromActiveFilterPanel(value)
      })
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

    if (value) {
      if (!item.checked) {
        this._activeFilterItems.filterBy = this._activeFilterItems.filterBy.filter((item) => item !== value)
        this.removeFromActiveFilterPanel(value)
      } else {
        this._activeFilterItems.filterBy.push(value)
        this.addToActiveFilterPanel(value)
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
  addToActiveFilterPanel(item: string) {
    if (!this.activeFilterPanel || !item) {
      return
    }

    const filterItem = `<div class="flex items-center gap-0.5 pl-3 pe-2 py-1 border rounded-lg border-cu-black-100">
          <span>${item}</span>
          <button
            type="button"
            class="cu-filter__active-filter-remove flex flex-shrink-0 w-4 h-4 p-1 ml-1 rounded-full text-cu-black-400 hover:bg-cu-red hover:text-white"
            data-label="${item}"
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
    this._activeFilterItems.filterBy = []
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

    const activeFilterItem = (filter as Filter).activeFilterItems

    console.log('Keep for the reference and future use in API', activeFilterItem)

    instances.push(filter)
  })

  return {
    destroy: () => {
      instances.forEach((instance) => instance.destroy())
    },
  }
}

export default FilterActions

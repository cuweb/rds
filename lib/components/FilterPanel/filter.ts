class Filter {
  private filter: HTMLElement
  // eslint-disable-next-line no-undef
  private dropdowns: NodeListOf<HTMLElement>
  // eslint-disable-next-line no-undef
  private dropdownMenuItems: NodeListOf<HTMLElement>

  private activeFilterPanel: HTMLElement | null
  // eslint-disable-next-line no-undef
  private activeFilterRemoveBtns: NodeListOf<HTMLElement>

  public _activeFilterItems: string[] = []

  constructor(filterElement: HTMLElement) {
    this.filter = filterElement as HTMLElement
    this.dropdowns = this.filter.querySelectorAll('.cu-filter__dropdown')
    this.dropdownMenuItems = this.filter.querySelectorAll('.cu-filter__dropdown-menu-item')
    this.activeFilterPanel = this.filter.querySelector('.cu-filter__active-filter-panel')
    this.activeFilterRemoveBtns = this.filter.querySelectorAll('.cu-filter__active-filter-remove')

    this.init()
  }

  init() {
    this.dropdownsClick()
    this.activeFilterItemLoad()
    this.dropdownItemClick()
    this.activeFilterRemoveBtnsClick()
  }

  dropdownsClick() {
    if (!this.dropdowns) {
      return
    }

    this.dropdowns.forEach((dropdown) => {
      this.dropdownsClickHandler(dropdown)
    })
  }

  /**
   * Load the active filter items when there is already a selected filter item.
   */
  activeFilterItemLoad() {
    if (!this.dropdownMenuItems) {
      return
    }
    this.dropdownMenuItems.forEach((item) => {
      this.dropdownItemClickHandler(item as HTMLInputElement)
    })
  }

  dropdownItemClick() {
    if (!this.dropdownMenuItems) {
      return
    }

    this.dropdownMenuItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.stopPropagation()

        const target = event.target as HTMLInputElement
        this.dropdownItemClickHandler(target)
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

        this._activeFilterItems = this._activeFilterItems.filter((item) => item !== value)
        this.unselectDropDownItem(value)
        this.removeFromActiveFilterPanel(value)
      })
    })
  }

  /**
   * Handles the click events for a dropdown element, enabling toggle functionality
   * for the dropdown menu and ensuring proper behavior when clicking outside the dropdown.
   *
   * @param dropdown - The dropdown HTMLElement that contains the toggle button and menu.
   *
   * Functionality:
   * - Adds a click event listener to the toggle button inside the dropdown to show or hide the menu.
   * - Adds a click event listener to the document to hide the menu when clicking outside the dropdown.
   * - Prevents event propagation when clicking inside the dropdown menu to avoid unintended behavior.
   */
  dropdownsClickHandler(dropdown: HTMLElement) {
    const toggleButton = dropdown.querySelector('.cu-filter__dropdown-toggle')
    const buttonArrow = dropdown.querySelector('.cu-filter__dropdown-arrow')
    const menu = dropdown.querySelector('.cu-filter__dropdown-menu') as HTMLElement

    if (toggleButton && menu) {
      // Show/hide the menu when clicking the toggle button
      toggleButton.addEventListener('click', (event) => {
        event.stopPropagation()

        // Close all other dropdowns
        this.closeAllDropdowns()

        // Toggle the menu visibility
        const isHidden = menu.classList.contains('hidden')
        menu.classList.toggle('hidden', !isHidden)

        if (isHidden) {
          this.alignDropdowns(menu)
        } else {
          menu.style.left = ''
          menu.style.right = ''
        }

        if (buttonArrow) {
          buttonArrow.classList.toggle('rotate-180', isHidden)
        }

        // Update the aria-expanded attribute to indicate whether the menu is open or closed
        const ariaExpanded = toggleButton.attributes.getNamedItem('aria-expanded')
        if (ariaExpanded) {
          ariaExpanded.value = isHidden.toString()
        }

        // Update the aria-haspopup attribute to indicate whether the menu is open or closed
        const popupOpen = toggleButton.attributes.getNamedItem('aria-haspopup')
        if (popupOpen) {
          popupOpen.value = isHidden.toString()
        }
      })

      // Hide the menu when clicking outside of the dropdown
      document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target as Node)) {
          menu.classList.add('hidden')

          if (buttonArrow) {
            buttonArrow.classList.remove('rotate-180')
          }
        }
      })

      // Prevent click events from propagating to the document when clicking inside the menu
      menu.addEventListener('click', (event) => {
        event.stopPropagation()
      })
    }
  }

  /**
   * Adjusts the alignment of a dropdown menu to ensure it stays within the viewport boundaries.
   *
   * This method checks the position of the dropdown menu relative to the viewport and adjusts
   * its `left` and `right` styles to prevent it from overflowing beyond the edges of the container.
   *
   * @param menu - The HTML element representing the dropdown menu to be aligned.
   */
  alignDropdowns(menu: HTMLElement) {
    const { right, left } = menu.getBoundingClientRect()
    const viewportWidth = this.filter.offsetWidth

    // Adjust alignment if the dropdown touches the right edge
    if (right > viewportWidth) {
      Object.assign(menu.style, { right: '-16px', left: 'auto' })
    }

    // Adjust alignment if the dropdown touches the left edge
    if (left < 0) {
      Object.assign(menu.style, { left: '-16px', right: 'auto' })
    }
  }

  /**
   * Handles the click event for a dropdown item in the filter panel.
   * Toggles the selection state of the clicked item and updates the active filter items accordingly.
   *
   * @param item - The HTML element representing the dropdown item that was clicked.
   *                It is expected to have a `data-label` attribute containing its value.
   *
   * Behavior:
   * - If the item is already selected:
   *   - Removes the item's value from the `_activeFilterItems` array.
   * - If the item is not selected:
   *   - Adds the item's value to the `_activeFilterItems` array.
   */
  dropdownItemClickHandler(item: HTMLInputElement) {
    const value = item.getAttribute('data-label')

    if (value) {
      if (!item.checked) {
        this._activeFilterItems = this._activeFilterItems.filter((item) => item !== value)
        this.removeFromActiveFilterPanel(value)
      } else {
        this._activeFilterItems.push(value)
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
      this.unselectDropDownItem(item)
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
   * Closes all dropdown menus within the component by iterating through the list of dropdown elements.
   *
   * - Hides the dropdown menu by adding the `hidden` class to its element.
   * - Resets the dropdown arrow button by removing the `rotate-180` class.
   *
   * This method ensures that all dropdowns are in their closed state.
   */
  closeAllDropdowns() {
    this.dropdowns.forEach((dropdown) => {
      const menu = dropdown.querySelector('.cu-filter__dropdown-menu')
      const buttonArrow = dropdown.querySelector('.cu-filter__dropdown-arrow')

      if (menu) {
        menu.classList.add('hidden')
      }

      if (buttonArrow) {
        buttonArrow.classList.remove('rotate-180')
      }
    })
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
  unselectDropDownItem(item: string) {
    if (!item) {
      return
    }

    this.dropdownMenuItems.forEach((dropdownItem) => {
      if (dropdownItem && dropdownItem.getAttribute('data-label') == item) {
        ;(dropdownItem as HTMLInputElement).checked = false
      }
    })
  }

  /**
   * Removes the checked dropdown items and remove the active filter panel.
   */
  unselectAllDropDownMenuItems() {
    if (!this.dropdownMenuItems) {
      return
    }

    this.dropdownMenuItems.forEach((item) => {
      const input = item.querySelector('input[type="checkbox"]') as HTMLInputElement
      if (input) {
        const value = input.getAttribute('data-label')
        input.checked = false

        if (value) {
          this.removeFromActiveFilterPanel(value)
        }
      }
    })
    this._activeFilterItems = []
  }

  /**
   * Cleans up resources and performs necessary teardown operations for the filter panel.
   * Specifically, it ensures that all dropdowns associated with the filter panel are closed.
   */
  destroy() {
    this.closeAllDropdowns()
    this.unselectAllDropDownMenuItems()
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

    console.log('activeFilterItem', activeFilterItem)
    instances.push(filter)
  })

  return {
    destroy: () => {
      instances.forEach((instance) => instance.destroy())
    },
  }
}

export default FilterActions

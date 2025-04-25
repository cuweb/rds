class Filter {
  private filter: HTMLElement
  // eslint-disable-next-line no-undef
  private dropdowns: NodeListOf<HTMLElement>

  constructor(filterElement: HTMLElement) {
    this.filter = filterElement
    this.dropdowns = this.filter.querySelectorAll('.cu-filter__dropdown')

    this.init()
  }

  init() {
    this.dropdownsClick()
  }

  dropdownsClick() {
    this.dropdowns.forEach((dropdown) => {
      this.dropdownsClickHandler(dropdown)
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
    const menu = dropdown.querySelector('.cu-filter__dropdown-menu')

    if (toggleButton && menu) {
      // Show/hide the menu when clicking the toggle button
      toggleButton.addEventListener('click', (event) => {
        event.stopPropagation()

        // Toggle the menu visibility
        const isHidden = menu.classList.contains('hidden')
        menu.classList.toggle('hidden', !isHidden)

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
        }
      })

      // Prevent click events from propagating to the document when clicking inside the menu
      menu.addEventListener('click', (event) => {
        event.stopPropagation()
      })
    }
  }
}

const filter = () => {
  const filterElements = document.querySelectorAll('.cu-filter')

  if (!filterElements) {
    return
  }

  filterElements.forEach((filterElement) => {
    new Filter(filterElement as HTMLElement)
  })
}

export default filter

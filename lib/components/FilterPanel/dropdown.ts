class Dropdown {
  private parentElement: HTMLElement

  // eslint-disable-next-line no-undef
  private dropdowns: NodeListOf<HTMLElement>

  constructor(filterElement: HTMLElement) {
    this.parentElement = filterElement as HTMLElement
    this.dropdowns = this.parentElement.querySelectorAll('.cu-filter__dropdown')

    this.dropdownsClick()
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

        // Toggle the menu visibility
        const isHidden = menu.classList.contains('hidden')

        if (!isHidden) {
          this.closeAllDropdowns()
          return
        }

        // Close all other dropdowns
        this.closeAllDropdowns()

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
    const viewportWidth = this.parentElement.offsetWidth

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
   * Cleans up resources and performs necessary teardown operations for the filter panel.
   * Specifically, it ensures that all dropdowns associated with the filter panel are closed.
   */
  destroy() {
    console.log('Destroying dropdowns')
    this.closeAllDropdowns()
  }
}

export default Dropdown

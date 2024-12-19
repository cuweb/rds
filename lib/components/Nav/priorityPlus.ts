/* eslint-disable */
// @ts-nocheck
import priorityPlus from './priority-plus/priorityPlus'

const menuPriority = () => {
  // Initialize the navigation
  const navElement = document.querySelector('.cu-nav__menu') as HTMLElement

  // If there's no navigation element, we don't need to run the rest of the script
  if (navElement) {
    // Store the instance of priorityPlus
    const navInstance = priorityPlus(navElement, {
      collapseAtCount: 2,
    })

    document.addEventListener('click', (event) => {
      const overflowNav = document.querySelector('[data-overflow-nav]')
      const toggleBtn = document.querySelector('[data-toggle-btn]')

      // If the overflowNav or toggleBtn doesn't exist, exit the function
      if (!overflowNav || !toggleBtn) return

      // Check if the overflow menu is open
      if (overflowNav.getAttribute('aria-hidden') === 'false') {
        document.body.classList.add('no-scroll')

        const target = event.target

        // Check if the click was outside the menu and the toggle button
        if (target && !overflowNav.contains(target as Node) && !toggleBtn.contains(target as Node)) {
          // Use the stored instance to close the overflow menu
          navInstance.setOverflowNavOpen(false)
          document.body.classList.remove('no-scroll')
        }
      } else {
        document.body.classList.remove('no-scroll')
      }
    })
  }
}

export default menuPriority

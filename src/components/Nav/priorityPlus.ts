import priorityPlus from 'priority-plus'

function menuPriority(nav: string) {
  // Initialize the navigation
  const navElement = document.querySelector(nav) as HTMLElement

  // If there's no navigation element, we don't need to run the rest of the script
  if (navElement) {
    // Store the instance of priorityPlus
    const navInstance = priorityPlus(navElement, {
      collapseAtCount: 2,
      innerToggleTemplate: `Browse
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none w-[15px] h-[15px] pt-1 text-cu-black-600 group-hover:text-cu-red-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
        </svg>
      `,
    })

    // Set the Browse dropdown style for small screen
    // @ts-expect-error: Type error from priority-plus
    navInstance.on('itemsChanged', () => {
      const overflowEl = document.querySelector('.p-plus__overflow')

      const primaryEl = document.querySelector('.p-plus__primary'),
        primaryNavItems = primaryEl ? primaryEl.querySelectorAll('.p-plus__primary-nav-item') : null

      if (overflowEl) {
        if (primaryNavItems && primaryNavItems.length === 0) {
          overflowEl.classList.add('p-plus_left')
        } else {
          overflowEl.classList.remove('p-plus_left')
        }
      }
    })

    // Close browse submenu item on nav submenu open
    const navChildToggles = document.querySelectorAll('.cu-nav__parent-item')

    if (navChildToggles.length) {
      navChildToggles.forEach((navChildToggle) => {
        navChildToggle.addEventListener('click', (item) => {
          const overflowEl = document.querySelector('.p-plus__overflow')

          const target = item.target

          if (overflowEl && target && item.target && !overflowEl.contains(target as Node)) {
            navInstance.setOverflowNavOpen(false)
          }
        })
      })
    }

    document.addEventListener('click', (event) => {
      const overflowNav = document.querySelector('[data-overflow-nav]')
      const toggleBtn = document.querySelector('[data-toggle-btn]')

      // If the overflowNav or toggleBtn doesn't exist, exit the function
      if (!overflowNav || !toggleBtn) return

      // Check if the overflow menu is open
      if (overflowNav.getAttribute('aria-hidden') === 'false') {
        document.body.classList.add('no-scroll')
        toggleBtn.classList.add('rotated')

        const target = event.target

        // Check if the click was outside the menu and the toggle button
        if (target && !overflowNav.contains(target as Node) && !toggleBtn.contains(target as Node)) {
          // Use the stored instance to close the overflow menu
          navInstance.setOverflowNavOpen(false)
          document.body.classList.remove('no-scroll')
          toggleBtn.classList.remove('rotated')
        }
      } else {
        document.body.classList.remove('no-scroll')
        toggleBtn.classList.remove('rotated')
      }
    })
  }
}

export default menuPriority

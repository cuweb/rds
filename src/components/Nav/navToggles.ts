const navArrowRotateClass = 'after:!rotate-[230deg]'
const navArrowActiveClass = 'bg-cu-black-50/35'
const parentMenuItemsSelector = '.cu-nav__parent-item'
const innerSubMenuTogglesSelector = '.cu-nav__inner-submenu-toggle'

const isElementOverflowing = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()
  const bodyRect = document.body.getBoundingClientRect()

  // Check if any part of the element is outside the body
  const isOverflowing = rect.left < bodyRect.left || rect.right > bodyRect.right

  return isOverflowing
}

// Close all sub menu items
const closeAllSubmenus = () => {
  const parentMenuItems = document.querySelectorAll(parentMenuItemsSelector)

  if (parentMenuItems) {
    parentMenuItems.forEach((menuItem) => {
      const submenuParent = menuItem.parentElement as HTMLElement

      if (submenuParent) {
        const submenu = submenuParent.nextElementSibling as HTMLElement

        if (submenu) {
          submenu.style.display = 'none'
          submenu.style.removeProperty('left')
          submenu.style.removeProperty('right')
          menuItem.setAttribute('aria-expanded', 'false')
          menuItem.classList.remove(navArrowRotateClass)
        }
      }
    })
  }

  // Close all inner submenus
  closeInnerSubMenus()
}

const closeInnerSubMenus = () => {
  const innerSubMenuToggles = document.querySelectorAll(innerSubMenuTogglesSelector)

  if (innerSubMenuToggles) {
    innerSubMenuToggles.forEach((toggle) => {
      toggle.classList.remove(navArrowRotateClass)
      toggle.classList.remove(navArrowActiveClass)
    })
  }

  const innerSubmenus = document.querySelectorAll('.cu-nav__inner-submenu')

  if (innerSubmenus) {
    innerSubmenus.forEach((submenu) => {
      if (submenu) {
        submenu.classList.add('hidden')
        submenu.setAttribute('aria-expanded', 'false')
      }
    })
  }
}

const handleMenuItemClick = (menuItem: HTMLElement) => {
  const menuItemParent = menuItem.parentElement as HTMLElement
  const isExpanded = menuItem.getAttribute('aria-expanded') === 'true'

  if (menuItemParent) {
    const submenu = menuItemParent.nextElementSibling as HTMLElement

    if (isExpanded) {
      if (submenu) {
        submenu.style.display = 'none'
        submenu.style.removeProperty('left')
        submenu.style.removeProperty('right')
      }
      menuItem.classList.remove(navArrowRotateClass)
      menuItem.setAttribute('aria-expanded', 'false')
    } else {
      if (submenu) {
        submenu.style.display = 'block'

        if (isElementOverflowing(submenu)) {
          submenu.style.left = 'unset'
          submenu.style.right = '0'
        }
      }
      menuItem.classList.add(navArrowRotateClass)
      menuItem.setAttribute('aria-expanded', 'true')
    }
  }
}

const handleInnerSubNavClick = (arrow: HTMLElement) => {
  const parentElement = arrow.parentElement

  const menuItemSelector = parentElement?.dataset?.menuItem

  if (menuItemSelector) {
    const menuItem = document.getElementById(menuItemSelector)

    if (menuItem) {
      if (menuItem.classList.contains('hidden')) {
        menuItem.classList.remove('hidden')
        menuItem.setAttribute('aria-expanded', 'true')
        arrow.classList.add(navArrowRotateClass)
        arrow.classList.add(navArrowActiveClass)
      } else {
        menuItem.classList.add('hidden')
        menuItem.setAttribute('aria-expanded', 'false')
        arrow.classList.remove(navArrowRotateClass)
        arrow.classList.remove(navArrowActiveClass)
      }
    }
  }
}

const setupMenuToggle = () => {
  const parentMenuItems = document.querySelectorAll(parentMenuItemsSelector)

  if (parentMenuItems) {
    parentMenuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (event: Event) => {
        event.preventDefault()
        const target = event.target
        if (target instanceof HTMLElement) {
          closeAllSubmenus()
          handleMenuItemClick(target)
        }
      })
    })
  }

  const innerSubMenuToggles = document.querySelectorAll(innerSubMenuTogglesSelector)

  if (innerSubMenuToggles) {
    innerSubMenuToggles.forEach((toggle) => {
      toggle.addEventListener('click', (event: Event) => {
        event.preventDefault()
        const target = event.target
        if (target) {
          handleInnerSubNavClick(target as HTMLElement)
        }
      })
    })
  }

  document.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement
    if (target) {
      const parentElement = target.parentElement

      if (parentElement?.classList.contains('cu-nav__parent-item')) {
        handleMenuItemClick(parentElement as HTMLElement)
      } else if (!target.matches(parentMenuItemsSelector) && !target.matches(innerSubMenuTogglesSelector)) {
        closeAllSubmenus()
      }
    }
  })
}

export default setupMenuToggle

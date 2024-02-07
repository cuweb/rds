const navArrowRotateClass = 'after:!rotate-[225deg]'
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
          submenuParent.setAttribute('aria-expanded', 'false')
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
      }
    })
  }
}

const handleMenuItemClick = (menuItem: HTMLElement) => {
  const menuItemParent = menuItem.parentElement as HTMLElement

  if (menuItemParent) {
    const submenu = menuItemParent.nextElementSibling as HTMLElement
    const isExpanded = menuItem.getAttribute('aria-expanded') === 'true'

    const arrow = menuItem.querySelector(innerSubMenuTogglesSelector)

    if (submenu) {
      if (isExpanded) {
        submenu.style.display = 'none'
        submenu.style.removeProperty('left')
        submenu.style.removeProperty('right')
        menuItem.classList.remove(navArrowRotateClass)
        menuItemParent.setAttribute('aria-expanded', 'false')

        if (arrow) {
          arrow.classList.remove(navArrowRotateClass)
        }
      } else {
        closeAllSubmenus()

        submenu.style.display = 'block'

        if (arrow) {
          arrow.classList.add(navArrowRotateClass)
        }

        if (isElementOverflowing(submenu)) {
          submenu.style.left = 'unset'
          submenu.style.right = '0'
        }
        menuItem.classList.add(navArrowRotateClass)
        menuItemParent.setAttribute('aria-expanded', 'true')
      }
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
        parentElement.setAttribute('aria-expanded', 'true')
        arrow.classList.add(navArrowRotateClass)
        arrow.classList.add(navArrowActiveClass)
      } else {
        menuItem.classList.add('hidden')
        parentElement.setAttribute('aria-expanded', 'false')
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

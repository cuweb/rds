const closeAllSubmenus = ( buttonSelector : string ) => {
  
  const buttons = document.querySelectorAll(buttonSelector)

  if ( buttons ) {
    buttons.forEach((button) => {
      const submenuParent = button.parentElement as HTMLElement

      if(submenuParent) {

        const submenu = submenuParent.nextElementSibling as HTMLElement

        if (submenu) {
          submenu.style.display = 'none'

          button.setAttribute('aria-expanded', 'false')

          const arrow = button.children[0]
          if (arrow) {
            arrow.classList.remove('!rotate-[230deg]')
          }
        }
      }
    })
  }

  closeInnerSubMenus();
}

// Close all inner submenus
const closeInnerSubMenus = () => {
  const subArrows = document.querySelectorAll('.cu-nav__subarrow');

  if ( subArrows ) {
    
    subArrows.forEach((arrow) => {

      if(arrow) {
        arrow.classList.remove('!rotate-[230deg]')
      }
    })
  }

  const submenus = document.querySelectorAll('.cu-nav__submenu1');

  if ( submenus ) {
    
    submenus.forEach((submenu) => {

      if(submenu) {
        submenu.classList.add('hidden')
        submenu.setAttribute('aria-expanded', 'false')
      }
    })
  }
}

const handleButtonClick = (button: HTMLElement) => {
  const submenuParent = button.parentElement as HTMLElement
  const isExpanded = button.getAttribute('aria-expanded') === 'true'

  if(submenuParent) {

    const submenu = submenuParent.nextElementSibling as HTMLElement

    if (isExpanded) {
      submenu.style.display = 'none'
      button.setAttribute('aria-expanded', 'false')
    } else {
      submenu.style.display = 'block'
      
      const arrow = button.children[0]

      if (arrow) {
        arrow.classList.add('!rotate-[230deg]')
      }
      button.setAttribute('aria-expanded', 'true')
    }
  }
}

const setupMenuToggle = (buttonSelector: string) => {
  const buttons = document.querySelectorAll(buttonSelector)

  buttons.forEach((button) => {
    button.addEventListener('click', (event: Event) => {
      event.preventDefault()
      const target = event.target
      if (target instanceof HTMLElement) {
        closeAllSubmenus(buttonSelector)
        handleButtonClick(target)
      }
    })
  })

  document.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement

    if (target && ( !target.matches(buttonSelector) && !target.matches('.cu-nav__subarrow') )) {
      closeAllSubmenus(buttonSelector)
    }
  })
}

const handleArrowClick = (arrow:HTMLElement) => {

  const parentElement = arrow.parentElement;
  const childElement = arrow.children[0];

  const menuItemSelector = parentElement?.dataset?.menuItem;

  if(menuItemSelector) {
    const menuItem = document.getElementById(menuItemSelector);

    if(menuItem){
      if(menuItem.classList.contains('hidden')) {
        menuItem.classList.remove('hidden')
        menuItem.setAttribute('aria-expanded', 'true')
        childElement.classList.add('!rotate-[230deg]');
      } else {
        menuItem.classList.add('hidden')
        menuItem.setAttribute('aria-expanded', 'false')
        childElement.classList.remove('!rotate-[230deg]');
      }
    }
  }
}

export const setupArrowToggle = (arrowSelector: string) => {
  const arrows = document.querySelectorAll(arrowSelector)

  if(arrows) {
    arrows.forEach((arrow) => {
      arrow.addEventListener('click', (event: Event) => {
        event.preventDefault()
        const target = event.target
        if (target) {
          handleArrowClick(target as HTMLElement)
        }
      })
    })
  }
}

export default setupMenuToggle

    setupMenuToggle('.cu-nav__parent-item')
    setupArrowToggle('.cu-nav__subarrow')
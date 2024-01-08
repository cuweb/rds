function setupMenuToggle(buttonSelector: string) {
  const buttons = document.querySelectorAll(buttonSelector)

  const closeAllSubmenus = () => {
    buttons.forEach((button) => {
      const submenu = button.nextElementSibling as HTMLElement

      if (submenu) {
        submenu.style.display = 'none'
        button.classList.remove('rotated')
        button.setAttribute('aria-expanded', 'false')
      }
    })
  }

  const handleButtonClick = (button: HTMLElement) => {
    const submenu = button.nextElementSibling as HTMLElement
    const isExpanded = button.getAttribute('aria-expanded') === 'true'

    closeAllSubmenus()

    if (isExpanded) {
      submenu.style.display = 'none'
      button.setAttribute('aria-expanded', 'false')
    } else {
      submenu.style.display = 'block'
      button.classList.add('rotated')
      button.setAttribute('aria-expanded', 'true')
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', (event: Event) => {
      event.stopPropagation()

      const target = event.target
      if (target instanceof HTMLElement) {
        handleButtonClick(target)
      }
    })
  })

  document.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement

    if (target && !target.matches(buttonSelector)) {
      closeAllSubmenus()
    }
  })
}

export default setupMenuToggle

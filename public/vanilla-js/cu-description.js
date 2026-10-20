const initializedRoots = new WeakMap()

const getAccordionButton = (target) => {
  return target && target.nodeType === Node.ELEMENT_NODE ? target.closest('.accordion__button') : null
}

const toggleAccordion = (button) => {
  const accordion = button.closest('.accordion')

  if (!accordion) {
    console.error('RDS Description accordion button is missing its .accordion container.', button)
    return
  }

  const content = Array.from(accordion.children).find((child) => child.matches('.accordion__content'))

  if (!content) {
    console.error('RDS Description accordion is missing its .accordion__content element.', accordion)
    return
  }

  const isExpanded = content.hidden
  const icon = button.querySelector('.accordion__icon')

  button.setAttribute('aria-expanded', String(isExpanded))
  content.hidden = !isExpanded

  if (icon) {
    icon.classList.toggle('rotate-90', isExpanded)
    icon.classList.toggle('rotate-0', !isExpanded)
  }
}

/**
 * Add delegated click and keyboard behavior to Description.Accordion markup.
 * Delegation also handles accordions inserted after initialization.
 *
 * @param {Document|Element} root Element whose descendants should be initialized.
 * @returns {() => void} Remove the delegated event listeners.
 */
export function initDescriptionAccordions(root = document) {
  const existingCleanup = initializedRoots.get(root)
  if (existingCleanup) return existingCleanup

  const handleClick = (event) => {
    const button = getAccordionButton(event.target)
    if (button) toggleAccordion(button)
  }

  const handleKeydown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return

    const button = getAccordionButton(event.target)
    if (!button || button.matches('button, input, select, textarea, a[href]')) return

    event.preventDefault()
    toggleAccordion(button)
  }

  root.addEventListener('click', handleClick)
  root.addEventListener('keydown', handleKeydown)

  const cleanup = () => {
    root.removeEventListener('click', handleClick)
    root.removeEventListener('keydown', handleKeydown)
    initializedRoots.delete(root)
  }

  initializedRoots.set(root, cleanup)
  return cleanup
}

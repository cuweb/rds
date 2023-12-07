export const toggleAccordion = (event: React.MouseEvent<HTMLElement>) => {
  const target = event.currentTarget,
    icon = target.querySelector('.accordion__icon'),
    accordion = target.closest('.accordion'),
    content = accordion ? accordion.querySelector<HTMLElement>('.accordion__content') : null,
    hidden = content != null ? content.hidden : null

  if (hidden) {
    target.setAttribute('aria-expanded', 'true')
    if (icon) {
      icon.classList.remove('rotate-0')
      icon.classList.add('rotate-90')
    }
  } else {
    target.setAttribute('aria-expanded', 'false')
    if (icon) {
      icon.classList.add('rotate-0')
      icon.classList.remove('rotate-90')
    }
  }

  if (content) {
    content.hidden = !hidden
  }
}

/* eslint-env browser */
var buttons = document.querySelectorAll('.accordion__button')

if (buttons) {
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const target = event.currentTarget,
        icon = target.querySelector('.accordion__icon'),
        accordion = target.closest('.accordion'),
        content = accordion.querySelector('.accordion__content'),
        hidden = content.hidden

      if (hidden) {
        target.setAttribute('aria-expanded', 'true')
        icon.classList.remove('rotate-0')
        icon.classList.add('rotate-90')
      } else {
        target.setAttribute('aria-expanded', 'false')
        icon.classList.add('rotate-0')
        icon.classList.remove('rotate-90')
      }

      content.hidden = !hidden
    })
  })
}

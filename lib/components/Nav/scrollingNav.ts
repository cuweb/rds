const scrollingNav = () => {
  const header = document.querySelector('.cu-header') as HTMLElement

  if (header) {
    const navTop = document.querySelector('.cu-nav--top') as HTMLElement,
      navBottom = document.querySelector('.cu-nav--bottom') as HTMLElement,
      navLogo = document.querySelector('.cu-nav__logo') as HTMLElement,
      headerBottom = header.offsetHeight

    let lastScrollTop = 0

    addEventListener('scroll', () => {
      const windowWidth = window.innerWidth

      const newScrollTop = window.scrollY

      const raised = newScrollTop > lastScrollTop && newScrollTop > headerBottom

      if (navLogo) {
        const navTopHeight = navLogo.offsetHeight

        if (navBottom || (windowWidth <= 640 && navTop)) {
          if (raised) {
            header.style.top = '-' + navTopHeight + 'px'
          } else {
            header.style.top = '0px'
          }
        }
      }

      lastScrollTop = newScrollTop
    })
  }
}

export default scrollingNav

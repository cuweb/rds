const scrollingNav = () => {
  const header = document.querySelector('.cu-header') as HTMLElement

  if (header) {
    const navPrimary = document.querySelector('.cu-nav--primary') as HTMLElement,
      navSecondary = document.querySelector('.cu-nav--secondary') as HTMLElement,
      navTop = document.querySelector('.cu-nav__top') as HTMLElement,
      headerBottom = header.offsetHeight

    let lastScrollTop = 0

    addEventListener('scroll', () => {
      const windowWidth = window.innerWidth

      const newScrollTop = window.scrollY

      const raised = newScrollTop > lastScrollTop && newScrollTop > headerBottom

      if (navTop) {
        const navTopHeight = navTop.offsetHeight

        if (navSecondary || (windowWidth <= 640 && navPrimary)) {
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
